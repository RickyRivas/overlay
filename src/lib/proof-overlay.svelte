<svelte:options customElement="proof-overlay" />

<script lang="ts">
	// After updates, purge cache https://www.jsdelivr.com/tools/purge
	const isProd = false;
	export let proofHeight = '4500';
	const proofWidth = '2000';

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

	// B, Bottom position
	// R, Right position
	// L, Left position

	// Local storage
	const stateStringName = 'savedState';
	let state = {
		activePath: proofPaths.index,
		opacity: 6,
		position: 'B'
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

	function lowestOpacity() {
		state.opacity = 2;
		update();
	}

	function fullOpacity() {
		state.opacity = 10;
		update();
	}

	let showPositionControls = false;
	function togglePositionControls() {
		showPositionControls = !showPositionControls;
	}

	const svgPaths = {
		left: 'M4.73214 14.2661C3.75595 13.2899 3.75595 11.7046 4.73214 10.7284L14.7282 0.732353C15.4467 0.0138836 16.5166 -0.196972 17.4537 0.193501C18.3909 0.583973 19 1.48987 19 2.5051V22.4973C19 23.5047 18.3909 24.4184 17.4537 24.8089C16.5166 25.1994 15.4467 24.9807 14.7282 24.27L4.73214 14.2739V14.2661Z',
		bottom:
			'M14.2661 20.2684C13.2899 21.2445 11.7046 21.2445 10.7284 20.2684L0.732353 10.2723C0.0138837 9.55379 -0.196972 8.48389 0.193501 7.54676C0.583973 6.60963 1.48987 6.00049 2.5051 6.00049H22.4973C23.5047 6.00049 24.4184 6.60963 24.8089 7.54676C25.1994 8.48389 24.9807 9.55379 24.27 10.2723L14.2739 20.2684H14.2661Z',
		right:
			'M20.2679 10.7341C21.244 11.7103 21.244 13.2956 20.2679 14.2718L10.2718 24.2678C9.5533 24.9863 8.4834 25.1972 7.54627 24.8067C6.60914 24.4162 6 23.5103 6 22.4951V2.5029C6 1.4955 6.60914 0.581795 7.54627 0.191295C8.4834 -0.199205 9.5533 0.0194952 10.2718 0.730196L20.2679 10.7263V10.7341Z'
	};

	// Eyedropper
	let eyeDropperColor = '#fff';

	async function initEyedropper() {
		try {
			const result = await new EyeDropper().open();
			console.log(result);
			eyeDropperColor = result.sRGBHex;
		} catch (e) {
			console.log('Eye Dropper cancelled.');
		}
	}

	let eyeDropperContainer;
	let eyeDropperCopySuccess = false;
	function saveColor() {
		navigator.clipboard.writeText(eyeDropperColor);
		eyeDropperCopySuccess = !eyeDropperCopySuccess;

		setTimeout(() => {
			eyeDropperCopySuccess = !eyeDropperCopySuccess;
		}, 2000);
	}
</script>

{#if showProof}
	<div id="proof-img-parent">
		<img src={state.activePath} alt="Proof Overlay" style="width: {proofWidth + 'px'}; min-width: {proofWidth + 'px'}; height: {proofHeight + 'px'}; opacity: {state.opacity / 10}" />
	</div>
{/if}

<div id="proof-controls" class="{state.position === 'B' ? 'fixed-bottom' : ''}{state.position === 'L' ? 'fixed-left' : ''}{state.position === 'R' ? 'fixed-right' : ''}">
	<div class="toggles">
		{#if !showProof}
			<button class="toggle" on:click={show}>show proof</button>
		{:else}
			<button class="toggle" on:click={hide}>hide proof</button>
		{/if}
		<button class="toggle" on:click={switchPaths} disabled={!showProof}>switch proofs</button>
	</div>

	<div class="opacity-controls">
		<button class="opacity-control" disabled={!showProof || state.opacity == 2} on:click={decrementOpacity}>
			-{opacityStep}
		</button>

		<button class="opacity-control" disabled={!showProof || state.opacity == 10} on:click={incrementOpacity}>
			+{opacityStep}
		</button>

		<button class="opacity-control" disabled={!showProof || state.opacity == 2} on:click={lowestOpacity}>L</button>
		<button class="opacity-control" disabled={!showProof || state.opacity == 10} on:click={fullOpacity}>F</button>
	</div>

	<button class="position-control" on:click={togglePositionControls}>
		<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			{#if state.position == 'B'}
				<path d={svgPaths.bottom} fill="currentcolor" />
			{:else if state.position == 'L'}
				<path d={svgPaths.left} fill="currentcolor" />
			{:else}
				<path d={svgPaths.right} fill="currentcolor" />
			{/if}
		</svg>
	</button>

	<button class="eyedropper" on:click={initEyedropper}>
		<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
			<path
				fill={eyeDropperColor}
				d="M25 4.184A4.189 4.189 0 0 0 20.816 0a4.155 4.155 0 0 0-2.958 1.226L13.92 5.162l-.45-.45a.568.568 0 0 0-.804 0l-2.272 2.273a.568.568 0 0 0 0 .803l.734.735-8.023 8.023a2.82 2.82 0 0 0-.832 2.01 3.82 3.82 0 0 1-.643 2.123L.095 22.98a.568.568 0 0 0 .071.717l1.137 1.137a.567.567 0 0 0 .717.07l2.401-1.6a3.415 3.415 0 0 1 1.903-.577c.78 0 1.53-.323 2.062-.886 1.041-1.107 7.29-7.213 8.083-7.978l.743.743a.566.566 0 0 0 .803 0l2.273-2.272a.568.568 0 0 0 0-.804l-.45-.45 3.937-3.937A4.156 4.156 0 0 0 25 4.184ZM11.091 15.91H6.956l5.78-5.78 2.125 2.127c-.936.904-2.264 2.19-3.77 3.653Z" />
		</svg>
	</button>

	{#if eyeDropperColor != '#fff'}
		<div class="eyedropper-container {eyeDropperCopySuccess ? 'success' : ''}">
			<svg
				on:click={() => {
					eyeDropperColor = '#fff';
				}}
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="none"
				viewBox="0 0 32 32"
				aria-hidden="true"
				role="img">
				<path
					fill="#861D1F"
					d="M16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32Zm-5.063-21.063a1.494 1.494 0 0 1 2.12 0l2.937 2.938 2.937-2.938a1.494 1.494 0 0 1 2.119 0 1.5 1.5 0 0 1 0 2.12l-2.938 2.937 2.938 2.937a1.494 1.494 0 0 1 0 2.119 1.5 1.5 0 0 1-2.119 0l-2.937-2.938-2.938 2.938a1.494 1.494 0 0 1-2.118 0 1.5 1.5 0 0 1 0-2.119l2.937-2.937-2.938-2.938a1.494 1.494 0 0 1 0-2.118Z" />
			</svg>
			<button on:click={saveColor}>{eyeDropperColor}</button>
			<div class="preview" style="background-color: {eyeDropperColor}"></div>
		</div>
	{/if}

	<div class="position-options {showPositionControls ? 'active' : ''}">
		<button
			on:click={() => {
				state.position = 'B';
				update();
				togglePositionControls();
			}}
			disabled={state.position == 'B'}>
			<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d={svgPaths.bottom} fill="#fff" />
			</svg>
		</button>
		<button
			on:click={() => {
				state.position = 'R';
				update();
				togglePositionControls();
			}}
			disabled={state.position == 'R'}>
			<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d={svgPaths.right} fill="#fff" />
			</svg>
		</button>
		<button
			on:click={() => {
				state.position = 'L';
				update();
				togglePositionControls();
			}}
			disabled={state.position == 'L'}>
			<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d={svgPaths.left} fill="#fff" />
			</svg>
		</button>
	</div>
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
		gap: 5px;
		padding: 5px;
		z-index: 9999;
		background-color: #222222cc;
		transition: all 0.33s ease;

		&.fixed-bottom {
			left: 50%;
			transform: translate3d(-50%, 0, 0);
			bottom: 20px;
		}

		&.fixed-right {
			flex-direction: column;
			top: 50%;
			transform: translate3d(0, -50%, 0);
			right: 20px;
		}

		&.fixed-left {
			flex-direction: column;
			top: 50%;
			transform: translate3d(0, -50%, 0);
			left: 20px;
		}
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

	.toggles {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 6px;
	}

	.opacity-controls {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		max-width: 3.5em;
		gap: 5px;
		background: #3e3e3e;
		border: 1px solid #4e4e4e;
	}

	.opacity-control {
		border-radius: 50%;
		width: 32px;
	}
	.position-control {
		border-radius: 50%;
		width: 32px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		svg {
			display: block;
			width: 50%;
			height: auto;
		}
	}

	.position-options {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 6px;
		background-color: #222222cc;
		position: absolute;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		padding: 0.25em;
		width: 100%;
		max-width: 4em;
		transition:
			opacity 0.33s ease,
			bottom 0.33s ease;
		pointer-events: none;
		bottom: -100%;
		opacity: 0;

		button {
			border-radius: 50%;
			width: 32px;
			height: 32px;
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				display: block;
				width: 50%;
				height: auto;
			}
		}

		&.active {
			bottom: calc(100% + 1em);
			opacity: 1;
			pointer-events: all;
		}
	}

	.toggle {
		width: 9em;
	}

	.eyedropper {
		border-radius: 50%;
		width: 32px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		svg {
			display: block;
			width: 50%;
			height: auto;
		}
	}

	.eyedropper-container {
		display: block;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: calc(100% + 0.5em);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #fff;
		transition: border-color 0.33s ease;
		background-color: #3e3e3e;
		padding: 5px;
		button {
			padding: 0 0.5em;
			text-transform: none;
			border: 0;
		}
		.preview {
			width: 32px;
			height: 32px;
			display: block;
			border-radius: 50%;
		}
		&.success {
			border-color: #d7ff4f;
		}
	}
</style>
