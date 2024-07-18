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

const apiUrl = import.meta.env.VITE_API_URL;

/* For showing all robot names at the beginning page */
export async function fetchRobotData(): Promise<Names[]> {
    const response = await fetch('${apiUrl}/');
    if (response.status === 200) {
        let data: Names[] = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotData");
}

/* For adding robot by inputted name */
export async function addRobot(name: string): Promise<void> {
    const response = await fetch('${apiUrl}/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });

    if (response.status === 409) {
        throw new Error('Name already exists');
    }
}

/* For showing all robot names at the beginning page*/
export async function fetchRobotsData(): Promise<RobotData[]> {
    const response = await fetch('${apiUrl}/');
    if (response.status === 200) {
        let data: RobotData[] = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotsData");
}

/* For showing info for current robot by name */
export async function fetchRobotDataByName(name: string | null): Promise<RobotData> {
    const response = await fetch('${apiUrl}/');
    if (response.status === 200) {
        let data: RobotData = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotDataByName");
}

/* For disconnecting from robot and deleting it */
export async function fetchDisconnect(name: string | null): Promise<void> {
    const response = await fetch('${apiUrl}/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });
    if (!response.ok) {
        throw new Error('Response error in fetchDisconnect');
    }
}

/* For changing parameters of camera */
export async function fetchCameraChanges(name: string | null, camera: string): Promise<void> {
    const camChange: CameraChanges = {
        name,
        camera
    }
    const response = await fetch('${apiUrl}/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(camChange)
    });
    if (!response.ok) {
        throw new Error('Response error in fetchCameraChanges');
    }
}

/* For changing parameters of speed */
export async function fetchSpeedChanges(name: string | null, speed: number): Promise<void> {
    const spChange: SpeedChanges = {
        name,
        speed
    }
    const response = await fetch('${apiUrl}/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(spChange)
    });
    if (!response.ok) {
        throw new Error('Response error in fetchSpeedChanges');
    }
}

export {type RobotData, type Names};