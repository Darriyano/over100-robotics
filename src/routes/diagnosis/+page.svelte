<script>
    const cameraStatus = "No signal";
    const wheelsStatus = "No signal";
    const batteryStatus = "No signal";
    const current = ""
</script>

<div class='page-container'>
    Диагностика робота
    <div class="diagnostic-id">
        <div class="diagnostic-text">ID робота:</div>
        <div class="robot-ID">{current}</div>
    </div>
    <div class="diagnostic-element">
        <div class="diagnostic-text">Камера</div>
        <div class="bad">{cameraStatus}</div>
    </div>
    <div class="diagnostic-element">
        <div class="diagnostic-text">Колесики</div>
        <div class="bad">{wheelsStatus}</div>
    </div>
    <div class="diagnostic-element">
        <div class="diagnostic-text">Заряд батареи</div>
        <div class="bad">{batteryStatus}</div>
    </div>
</div>
