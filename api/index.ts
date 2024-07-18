interface RobotData {
    id: number;
    name: string;
    camera: boolean;
    wheels: boolean;
    battery: number;
    speed: number;
}

interface Names {
    name: string
}

/* For showing all robot names at the beginning page*/
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
    throw new Error("Response error in fetchRobotData");
}


export {type RobotData, type Names};