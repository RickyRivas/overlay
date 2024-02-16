<svelte:options customElement="proof-overlay" />

<script lang="ts">
	const isProd = false;

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
		<img src={state.activePath} alt="Rivas Web Designs" style="width: {proofWidth + 'px'}; min-width: {proofWidth + 'px'}; height: {proofHeight + 'px'}; opacity: {state.opacity / 10}" />
	</div>
{/if}

<div id="proof-controls">
	{#if !showProof}
		<button on:click={show}>show proof</button>
	{:else}
		<button on:click={hide}>hide proof</button>
	{/if}

	<button on:click={switchPaths} disabled={!showProof}>switch proofs</button>

	<div class="opacity-controls">
		<button disabled={!showProof || state.opacity == 10} on:click={incrementOpacity}>
			+{opacityStep}
		</button>

		<button disabled={!showProof || state.opacity == 2} on:click={decrementOpacity}>
			-{opacityStep}
		</button>
	</div>
</div>

<style lang="less">
	#proof-img-parent {
		position: relative;
		display: block;
		img {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate3d(-50%, 0, 0);
			z-index: 9998;
			// pointer-events: none;
		}
	}

	#proof-controls {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		z-index: 9999;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		bottom: 1em;
		width: 100%;

		button {
			display: block;
			width: 100%;
			font-size: 15px;
			max-width: 150px;
			border: 0;
			padding: 0.5em 0.25em;
			background-color: #2b3647;
			color: #fff;
			margin: 5px;
			&:disabled {
				background-color: #ccc;
			}
		}
	}
</style>
