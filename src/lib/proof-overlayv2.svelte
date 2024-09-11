<!-- required -->
<svelte:options customElement="proof-overlayv2" />

<script>
	import { onMount } from 'svelte';

	// default values
	let showSettings = false;
	let lsName = 'overlay-js-data';
	const displayedProofName = 'displayed-proof';
	let appData = {
		showProof: false,
		proofsFolderPath: './proofs',
		// if true show home proof, else show sub
		activeProofisHome: true,
		opacity: 1,
		prooffilenames: {
			home: 'index.jpg',
			sub: 'sub.jpg'
		},
		dimensions: {
			width: 2000,
			height: 0
		}
	};

	function incrementOpacity() {
		if (appData.opacity === 1) return;
		appData.opacity = Math.min(1, roundToTwoDecimals(appData.opacity + 0.2));
		saveAppToLS();
		document.querySelector(`img.${displayedProofName}`).style.opacity = appData.opacity;
	}

	function decrementOpacity() {
		if (appData.opacity <= 0.2) return;
		appData.opacity = Math.max(0.2, roundToTwoDecimals(appData.opacity - 0.2));
		saveAppToLS();
		document.querySelector(`img.${displayedProofName}`).style.opacity = appData.opacity;
	}

	function fullOpacity() {
		appData.opacity = 1;
		saveAppToLS();
		document.querySelector(`img.${displayedProofName}`).style.opacity = appData.opacity;
	}

	function lowestOpacity() {
		appData.opacity = 0.2;
		saveAppToLS();
		document.querySelector(`img.${displayedProofName}`).style.opacity = appData.opacity;
	}

	function showActiveProof() {
		if (isProofBeingDisplayed()) {
			removeDisplayedProof();
			appData.showProof = false;
			saveAppToLS();
			return;
		}

		const proof = document.createElement('img');
		proof.className = displayedProofName;
		proof.width = appData.dimensions.width;
		proof.height = appData.dimensions.height;
		proof.src = `${appData.proofsFolderPath}/${appData.activeProofisHome ? appData.prooffilenames.home : appData.prooffilenames.sub}`;
		proof.style.opacity = appData.opacity;
		// append to body right below the opening tag
		document.body.insertBefore(proof, document.body.firstChild);
		appData.showProof = true;
		saveAppToLS();
	}
	function removeDisplayedProof() {
		if (isProofBeingDisplayed()) {
			document.body.removeChild(document.querySelector(`img.${displayedProofName}`));
		}
	}

	function isProofBeingDisplayed() {
		if (document.querySelector(`img.${displayedProofName}`)) return true;
		else return false;
	}

	function toggleProofs() {
		appData.activeProofisHome = !appData.activeProofisHome;
		// TODO: if proof is already beign displayed, toggle the src
		saveAppToLS();
		removeDisplayedProof();
		if (appData.showProof) showActiveProof();
	}

	// Eyedropper
	let eyeDropperColor = '';

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
			eyeDropperColor = '';
		}, 1000);
	}

	// Helper function to round to two decimal places
	function roundToTwoDecimals(num) {
		return Math.round((num + Number.EPSILON) * 100) / 100;
	}
	// global funcs

	function saveSettings() {
		saveAppToLS();
		if (isProofBeingDisplayed()) {
			removeDisplayedProof();
			showActiveProof();
		}
		showSettings = false;
	}
	function saveAppToLS() {
		localStorage.setItem(lsName, JSON.stringify(appData));
	}
	function init() {
		appData = getData() ? getData() : appData;
	}
	function getData() {
		return JSON.parse(localStorage.getItem(lsName));
	}

	onMount(() => {
		init();
		if (appData.showProof) showActiveProof();
	});
</script>

<!-- main -->
<div class="overlayjs-controller">
	<!-- Settings -->
	<form class="settings" action="" class:show={showSettings} on:submit|preventDefault>
		<div class="form-control">
			<label for="">
				Path to folder containing proofs
				<input type="text" name="" id="" bind:value={appData.proofsFolderPath} />
			</label>
		</div>
		<div class="form-controls">
			<div class="form-control">
				<label for="">
					Widths
					<input type="text" name="" id="" bind:value={appData.dimensions.width} />
				</label>
			</div>
			<div class="form-control">
				<label for="">
					Heights
					<input type="text" name="" id="" bind:value={appData.dimensions.height} />
				</label>
			</div>
		</div>
		<div class="form-controls">
			<div class="form-control">
				<label for="">
					File name of home proof
					<input type="text" name="" id="" bind:value={appData.prooffilenames.home} />
				</label>
			</div>
			<div class="form-control">
				<label for="">
					File name of sub proof
					<input type="text" name="" id="" bind:value={appData.prooffilenames.sub} />
				</label>
			</div>
		</div>
		<p>{`Active proof full path: ${appData.proofsFolderPath}/${appData.activeProofisHome ? appData.prooffilenames.home : appData.prooffilenames.sub}`}</p>
		<p>{`The image has an opacity of ${appData.opacity}`}</p>
		<button id="settings-form-submit" on:click={saveSettings}>Save</button>
	</form>

	{#if eyeDropperColor}
		<button class="selected-color-btn" style:border-color={eyeDropperColor} on:click={saveColor} bind:this={eyeDropperContainer} class:active={eyeDropperCopySuccess}>
			{eyeDropperColor}
		</button>
	{/if}

	<!-- Toggles -->
	<div class="switches">
		<input id="proof-toggle" type="checkbox" name="" aria-label="proof toggle" checked={appData.showProof} on:change={showActiveProof} />
		<label for="proof-toggle" class="switch"></label>

		<input id="proof-switch-toggle" type="checkbox" name="" aria-label="proof Switch toggle" checked={appData.activeProofisHome} on:change={toggleProofs} disabled={!appData.showProof} />
		<label for="proof-switch-toggle" class="switch">
			<span>h</span>
			<span>s</span>
		</label>
	</div>

	<div class="opacity-btns">
		<button class="opacity-btn" on:click={decrementOpacity} disabled={!appData.showProof || appData.opacity <= 0.2}>-2</button>
		<button class="opacity-btn" on:click={incrementOpacity} disabled={!appData.showProof || appData.opacity === 1}>+2</button>
		<button class="opacity-btn" on:click={lowestOpacity} disabled={!appData.showProof || appData.opacity <= 0.2}>L</button>
		<button class="opacity-btn" on:click={fullOpacity} disabled={!appData.showProof || appData.opacity === 1}>F</button>
	</div>

	<div class="other-btns">
		<button
			class="settings-btn"
			class:active={showSettings}
			on:click={() => {
				showSettings = !showSettings;
			}}>
			<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="33" height="34" fill="none" viewBox="0 0 33 34">
				<path
					fill="currentcolor"
					d="M17.474 0c1.512 0 2.81 1.04 3.095 2.48l.126.64c.497 2.516 3.181 4.018 5.677 3.177l.635-.214c1.428-.48 3.007.09 3.762 1.359l1.142 1.916a2.99 2.99 0 0 1-.668 3.838l-.509.427a4.117 4.117 0 0 0 0 6.354l.509.427a2.99 2.99 0 0 1 .668 3.838l-1.142 1.916c-.755 1.27-2.334 1.84-3.762 1.358l-.635-.213c-2.496-.841-5.18.661-5.677 3.177l-.126.64c-.284 1.44-1.583 2.48-3.095 2.48h-2.283c-1.51 0-2.81-1.04-3.094-2.48l-.126-.64c-.498-2.516-3.181-4.018-5.677-3.177l-.635.213c-1.428.481-3.006-.089-3.762-1.358L.755 24.242a2.99 2.99 0 0 1 .668-3.838l.509-.427a4.117 4.117 0 0 0 0-6.354l-.509-.426a2.99 2.99 0 0 1-.668-3.839l1.142-1.916c.756-1.27 2.334-1.84 3.762-1.359l.635.214c2.496.84 5.18-.661 5.677-3.177l.126-.64C12.382 1.04 13.68 0 15.192 0h2.282Zm-1.141 21.6a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z" />
			</svg>
		</button>
		<button class="eyedropper" on:click={initEyedropper}>
			<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
				<path
					fill={eyeDropperColor ? eyeDropperColor : 'currentcolor'}
					d="M25 4.184A4.189 4.189 0 0 0 20.816 0a4.155 4.155 0 0 0-2.958 1.226L13.92 5.162l-.45-.45a.568.568 0 0 0-.804 0l-2.272 2.273a.568.568 0 0 0 0 .803l.734.735-8.023 8.023a2.82 2.82 0 0 0-.832 2.01 3.82 3.82 0 0 1-.643 2.123L.095 22.98a.568.568 0 0 0 .071.717l1.137 1.137a.567.567 0 0 0 .717.07l2.401-1.6a3.415 3.415 0 0 1 1.903-.577c.78 0 1.53-.323 2.062-.886 1.041-1.107 7.29-7.213 8.083-7.978l.743.743a.566.566 0 0 0 .803 0l2.273-2.272a.568.568 0 0 0 0-.804l-.45-.45 3.937-3.937A4.156 4.156 0 0 0 25 4.184ZM11.091 15.91H6.956l5.78-5.78 2.125 2.127c-.936.904-2.264 2.19-3.77 3.653Z" />
			</svg>
		</button>
	</div>
</div>

<style lang="less">
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.overlayjs-controller {
		position: fixed;
		bottom: 25px;
		left: 50%;
		transform: translateX(-50%);
		display: inline-block;
		vertical-align: top;
		background-color: #222222cc;
		padding: 5px;
		z-index: 9999;
		display: flex;
		gap: 5px;
		justify-content: center;
		align-items: center;

		p {
			font-size: 16px;
		}
	}

	.displayed-proof {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		z-index: 9998;
		pointer-events: none;

		@media only screen and (max-width: 1023px) {
			display: none;
		}
	}

	form.settings {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 500px;
		position: absolute;
		bottom: calc(100% + 25px);
		left: 50%;
		background-color: #fff;
		padding: 20px;
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		border: 2px solid #ebebeb;
		transition:
			transform 0.33s ease,
			opacity 0.33s ease;
		// initial
		opacity: 0;
		transform: translate(-50%, 20px);
		pointer-events: none;

		@media only screen and (max-width: 767px) {
			width: 100vw;
		}

		&.show {
			opacity: 1;
			transform: translate(-50%, 0px);
			pointer-events: all;
		}

		.form-controls {
			display: flex;
			gap: 20px;
		}

		.form-control {
			@fs: 16;
			font-size: unit(@fs, px);
			display: block;
			color: #000;
			width: 100%;

			label {
				display: block;
			}

			input {
				font: inherit;
				display: block;
				position: relative;
				width: 100%;
				font-size: unit(@fs, px);
				line-height: (50 / @fs);
				padding: 0 10px;
				border: 2px solid #ebebeb;
				outline: 0;
				transition: border-color 0.33s ease;

				&:focus,
				&:hover {
					border-color: #212121;
				}
			}
		}

		#settings-form-submit {
			font: inherit;
			display: block;
			border: 0;
			border-radius: 0;
			padding: 0;
			margin: 0;
			width: 100%;
			font-size: unit(16, px);
			line-height: (50/16);
			transition:
				color 0.33s ease,
				background-color 0.33s ease;

			&:hover {
				color: #fff;
				background-color: #212121;
			}
		}
	}

	.selected-color-btn {
		position: absolute;
		font: inherit;
		display: block;
		font-size: 16px;
		background-color: #fff;
		border: 0;
		border-radius: 0;
		padding: 0;
		margin: 0;
		bottom: calc(100% + 10px);
		width: 100%;
		line-height: 25px;
		text-transform: uppercase;
		border: 10px solid rgba(256, 256, 256, 0);
		transition:
			border-color 0.33s ease,
			background-color 0.33s ease,
			color 0.33s ease;
		outline: 1px solid #212121;

		&.active {
			background-color: green;
			color: #fff;
		}
	}

	.opacity-btn {
		font: inherit;
		display: block;
		background-color: #fff;
		border: 0;
		border-radius: 0;
		padding: 0;
		margin: 0;
		width: 100%;
		font-size: unit(16, px);
		line-height: (32/16);
		width: 32px;
		border-radius: 50%;
		transition: background-color 0.33s ease;
		outline: none;

		&:active:not(:disabled) {
			background-color: #074ef7;
		}
	}

	.opacity-btns {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		width: 32px * 2 + 5px;
	}

	.other-btns {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.eyedropper {
		width: 32px;
		height: 32px;
		font: inherit;
		display: block;
		border: 0;
		border-radius: 50%;
		padding: 5px;
		margin: 0;
		line-height: 0;
		background-color: #fff;
		transition: background-color 0.33s ease;
		outline: none;

		svg {
			color: #212121;
			display: inline-block;
			width: 100%;
			height: auto;
			transition:
				transform 0.33s ease,
				color 0.33s ease;
		}

		&.active,
		&:hover {
			svg {
				transform: rotate(180deg);
			}
		}

		&.active {
			background-color: #074ef7;

			svg {
				color: #fff;
			}
		}
	}

	.settings-btn {
		width: 32px;
		height: 32px;
		font: inherit;
		display: block;
		border: 0;
		border-radius: 50%;
		padding: 2.5px;
		margin: 0;
		line-height: 0;
		background-color: #fff;
		transition: background-color 0.33s ease;
		outline: none;

		svg {
			color: #212121;
			display: inline-block;
			width: 100%;
			height: auto;
			transition:
				transform 0.33s ease,
				color 0.33s ease;
		}

		&.active,
		&:hover {
			svg {
				transform: rotate(180deg);
			}
		}

		&.active {
			background-color: #074ef7;

			svg {
				color: #fff;
			}
		}
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 32px;
		background-color: #fff;
		border-radius: 20px;
		transition: background-color 0.33s ease;

		&::after {
			content: 'S';
			font-size: 14px;
			line-height: 28px;
			text-align: center;
			position: absolute;
			width: 28px;
			height: 28px;
			border-radius: 50%;
			background-color: white;
			border: 1px solid #212121;
			top: 1px; // TO GIVE AN EFFECT OF CIRCLE INSIDE SWITCH.
			left: 1px;
			transition: all 0.3s;
		}

		span {
			display: inline-block;
			vertical-align: top;
			font-size: 14px;
			line-height: 32px;
			text-transform: uppercase;
			margin-left: 1.5px;
			position: absolute;

			&:nth-child(1) {
				left: 9px;
			}

			&:nth-child(2) {
				right: 12px;
			}
		}
	}

	.switches {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	#proof-switch-toggle + .switch {
		&::after {
			content: '';
			background-color: transparent;
		}
	}

	#proof-toggle,
	#proof-switch-toggle {
		display: none;

		&:disabled + .switch {
			color: #ccc;

			&::after {
				border-color: #ccc;
			}
		}
	}

	#proof-toggle:checked + .switch {
		background-color: #074ef7;

		&::after {
			transform: translateX(28px);
		}
	}

	#proof-switch-toggle:checked + .switch {
		&::after {
			transform: translateX(28px);
		}
	}
</style>
