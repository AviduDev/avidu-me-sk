<script>
	export let form;
</script>

<div class="wrapper">
	<form method="POST" class="container">

		<!-- email -->
		<div class="input">
			<label for="email">Your Email*</label>
			<input type="email" name="email" id="email" required />
		</div>

		<!--  -->
		<div class="input">
			<p>What kind of site u need?</p>

			<div>
				<input type="radio" id="business" name="website" value="business" checked />
				<label for="business">Business Website</label>
			</div>

			<div>
				<input type="radio" id="ecommerce" name="website" value="ecommerce" />
				<label for="ecommerce">E-commerce website</label>
			</div>

			<div>
				<input type="radio" id="portfolio" name="website" value="portfolio" />
				<label for="portfolio">Personal Portfolio</label>
			</div>

            <div>
				<input type="radio" id="blog" name="website" value="blog" />
				<label for="blog">Blog Website</label>
			</div>
		</div>
		<!--  -->

		<!-- how many pages -->
		<div class="input">
			<label for="pages">How many pages?</label>
			<input type="number" name="pages" min="1" max="20" id="" />
		</div>

		<!-- what features need -->
		<div class="input">
			<label for="features">what features need?</label>
			<textarea name="features" maxlength="500" id="" cols="30" rows="10" />
		</div>

		<!-- attachments -->
		<div class="input">
			<label for="attachments">Any References?</label>
			<input type="file" id="attachments" name="attachments" accept=".jpg, .jpeg, .png" multiple />
		</div>

		<button type="submit">Send</button>
	</form>
	<p class="success">{form?.success || ''}</p>
</div>

<style>
	.wrapper {
		max-width: 800px;
		margin: 2em auto;
	}
	fieldset {
		padding: 2em;
		box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
	}
	legend {
		font-weight: bold;
		font-size: 2em;
		padding: 0 0.25em;
		color: #333;
	}
	.container {
		max-width: 400px;
	}
	.input {
		display: grid;
		margin-bottom: 1.5em;
	}
	label {
		font-weight: 600;
		margin-bottom: 0.25em;
		color: #555;
	}
	input {
		padding: 5px;
	}
	button {
		cursor: pointer;
		padding: 0.5em 1em;
		border-radius: 4px;
		border: 1px solid rgb(5, 151, 64);
		background-color: rgb(5, 151, 64);
		color: white;
	}
	.success {
		color: #0a5;
	}
</style>
