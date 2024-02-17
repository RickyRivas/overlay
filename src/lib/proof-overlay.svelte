<svelte:options customElement="proof-overlay" />

<script lang="ts">
	// After updates, purge cache https://www.jsdelivr.com/tools/purge
	const isProd = true;

	// Dimensions of the proof images. proofHeight will be updated with each build.
	export let proofHeight = '4545';
	let proofWidth = '2000';

	// This widget will primarly be used in a SC production site so path should be relative to their folder structure
	// Sveltekit sites have a very different site structure so value will change when in Prod
	let basePath: any;
	if (isProd) basePath = '/proofs';
	if (!isProd) basePath = './assets/images/spotlight/proofs';

	const proofPaths = {
		index: `${basePath}/index.jpg`,
		sub: `${basePath}/sub.jpg`
	};

	let showProof = false;

	// / 10
	const opacityStep = 2;

	// Local storage
	const stateStringName = 'savedState';
	let state = {
		activePath: proofPaths.index,
		opacity: 6
	};

	const savedState = JSON.parse(localStorage.getItem(stateStringName));

	if (!savedState) {
		console.log('No currently stored data in local storage.');
	} else {
		state = JSON.parse(localStorage.getItem(stateStringName));
		showProof = true;
	}

	console.log('ProofOverlay.js initiated.');

	function switchPaths() {
		if (state.activePath === proofPaths.index) {
			state.activePath = proofPaths.sub;
			update();
		} else {
			state.activePath = proofPaths.index;
			update();
		}
	}

	function show() {
		showProof = !showProof;
		localStorage.setItem(stateStringName, JSON.stringify(state));
	}

	function hide() {
		showProof = !showProof;
		localStorage.removeItem(stateStringName);
	}

	function update() {
		localStorage.setItem(stateStringName, JSON.stringify(state));
	}

	function incrementOpacity() {
		if (state.opacity === 10) return;
		state.opacity = state.opacity + opacityStep;
		update();
	}

	function decrementOpacity() {
		if (state.opacity <= 2) return;
		state.opacity = state.opacity - opacityStep;
		update();
	}
</script>

{#if showProof}
	<div id="proof-img-parent">
		<img src={state.activePath} alt="Proof Overlay" style="width: {proofWidth + 'px'}; min-width: {proofWidth + 'px'}; height: {proofHeight + 'px'}; opacity: {state.opacity / 10}" />
	</div>
{/if}

<div id="proof-controls">
	{#if !showProof}
		<button class="toggle" on:click={show}>show proof</button>
	{:else}
		<button class="toggle" on:click={hide}>hide proof</button>
	{/if}

	<button class="toggle" on:click={switchPaths} disabled={!showProof}>switch proofs</button>

	<button class="opacity-control" disabled={!showProof || state.opacity == 2} on:click={decrementOpacity}>
		-{opacityStep}
	</button>

	<button class="opacity-control" disabled={!showProof || state.opacity == 10} on:click={incrementOpacity}>
		+{opacityStep}
	</button>
</div>

<style lang="less">
	@import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap');
	#proof-img-parent {
		position: relative;
		display: block;
		img {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate3d(-50%, 0, 0);
			z-index: 9998;
			pointer-events: none;
		}
	}

	#proof-controls {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		padding: 0;
		gap: 5px;
		padding: 5px;
		z-index: 9999;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		bottom: 20px;
		background-color: #222222cc;
	}
	button {
		display: inline-block;
		vertical-align: top;
		font-size: 15px;
		border: 0;
		padding: 0;
		background: #3e3e3e;
		color: #d3d3d3;
		text-transform: capitalize;
		line-height: 30px;
		border: 1px solid #4e4e4e;
		transition: border-color 0.33s ease;
		font-family: 'Kode Mono', monospace;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		&:hover:not(:disabled) {
			border-color: white;
		}
		&:disabled {
			background-color: #ccc;
			color: #3e3e3e;
		}
	}

	.opacity-control {
		border-radius: 50%;
		width: 32px;
	}

	.toggle {
		width: 9em;
	}
</style>
