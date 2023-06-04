<?php include 'memorydao.php' ?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
	<title>One Bench</title>
	<script type="module" src="js/bench.js"></script>
	<link href='css/style.css' rel='stylesheet' />
</head>


<body>
	<div id="container1">
		<h1 id="title">One Bench</h1>
		<span id="speechBubble">Tell me <br>something</span>
	</div>

	<div id="container2">
		<textarea id="messageBox" placeholder="Share your thoughts..."></textarea>
		<div id="sliderContainer">
			<slider-color-picker style="width: 97%"></slider-color-picker>
		</div>
		<button id="saveMemoryButton" class="button-6">Add to Diary</button>
	</div>

	<div id="bubbleCollection">
	</div>
	<br>

	<div id="memoryDetails" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<div id="modalQuestion">
			</div>
			<div id="modalText">
			</div>
			<span id="modalDate">
			</span>
		</div>
	</div>

</body>

</html>