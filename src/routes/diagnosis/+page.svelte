<script>
    import '../../styles/diagnostic-styles.css';
    const cameraStatus = "No signal";
    const wheelsStatus = "No signal";
    const batteryStatus = "No signal";
    const current = ""
</script>
<head>
	<title>Robot diagnostics</title>
	<meta name="description" content="The page with the diagnostic of robot's Camera, Wheels and Battery charge" />
</head>
<div class='page-container'>
    Robot diagnostics
    <div class="diagnostic-id">
        <div class="diagnostic-text">ID of the robot:</div>
        <div class="robot-ID">{current}</div>
    </div>
    <div class="diagnostic-element">
        <div class="diagnostic-text">Camera</div>
        <div class="bad">{cameraStatus}</div> 
    </div>
    <div class="diagnostic-element">
        <div class="diagnostic-text">Wheels</div>
        <div class="bad">{wheelsStatus}</div>
    </div>
    <div class="diagnostic-element">
        <div class="diagnostic-text">Battery charge</div>
        <div class="bad">{batteryStatus}</div>
    </div>
</div>
