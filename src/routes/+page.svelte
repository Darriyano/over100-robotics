<script>
	import '../styles/signpage.css';
</script>

<head>
	<title>Login page</title>
	<meta name="description" content="The page with the conection to the robot" />
</head>
<div class="page-container">
	Connect to the robot
	<select class="robotID" id="robotID" name="robotID" required>
		<option value="SomeID1">SomeID1</option>
		<option value="SomeID2">SomeID2</option>
		<option value="SomeID3">SomeID3</option>
	</select>
	<button class="connect-btn">Connect</button>
	<div class="add-txt">Has no robot?</div>
	<button class="add-btn"
		><a href="add-new-robot" style="text-decoration: none; color: #FFFFFF">Add</a></button
	>
</div>
