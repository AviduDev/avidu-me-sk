<script>
import Title from "../../routes/Title.svelte";

	export let question = '';
	export let answer = '';
	export let typeName = '';


</script>



	<div class="wrapper">
	<h4 class="question">{question}<span class="type">{typeName}</span></h4>
	<div class="answer">{answer}</div>
</div>


<style>
	.question {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
.wrapper {
	border-top: solid 1px black;
}

.type {
	display: flex;
	align-self: baseline;
	padding: 0.25rem;
	margin: 0.25rem;
	background-color: #cecece;
}

.answer {
	max-width: 80%;
	text-align: justify;
}
</style>
