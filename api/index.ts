interface RobotData {
    id: number;
    name: string;
    camera: string;
    wheels: boolean;
    battery: number;
    speed: number;
}

interface Names {
    name: string
}

interface CameraChanges {
    name: string | null;
    camera: string;
}

interface SpeedChanges {
    name: string | null;
    speed: number;
}

/* For showing all robot names at the beginning page */
export async function fetchRobotData(): Promise<Names[]> {
    const response = await fetch(`/endpoint1`);
    if (response.status === 200) {
        let data: Names[] = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotData");
}

/* For adding robot by inputted name */
export async function addRobot(name: string): Promise<void> {
    const response = await fetch('/api/add-robot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });

    if (!response.ok) {
        throw new Error('Failed to submit the robot name or name already exists');
    }
}

/* For showing all robot names at the beginning page*/
export async function fetchRobotsData(): Promise<RobotData[]> {
    const response = await fetch(`/endpoint1`);
    if (response.status === 200) {
        let data: RobotData[] = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotsData");
}

/* For showing info for current robot by name */
export async function fetchRobotDataByName(name: string | null): Promise<RobotData> {
    const response = await fetch(`/endpoint1`);
    if (response.status === 200) {
        let data: RobotData = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotDataByName");
}

export async function fetchDisconnect(name: string): Promise<void> {
    const response = await fetch('/api/add-robot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });
    if (!response.ok) {
        throw new Error('Response error in fetchDisconnect');
    }
}

export async function fetchCameraChanges(name: string | null, camera: string): Promise<void> {
    const camChange: CameraChanges = {
        name,
        camera
    }
    const response = await fetch('/api/add-robot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(camChange)
    });
    if (!response.ok) {
        throw new Error('Response error in fetchDisconnect');
    }
}

export async function fetchSpeedChanges(name: string | null, speed: number): Promise<void> {
    const spChange: SpeedChanges = {
        name,
        speed
    }
    const response = await fetch('/api/add-robot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(spChange)
    });
    if (!response.ok) {
        throw new Error('Response error in fetchDisconnect');
    }
}

export {type RobotData, type Names};