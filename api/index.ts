interface RobotData {
    id: number;
    name: string;
    camera: string;
    wheels: boolean;
    battery: number;
    speed: string;
}

interface Names {
    name: string
}

/* For showing all robot names at the beginning page*/
export async function fetchRobotData(): Promise<Names[]> {
    const response = await fetch(`/endpoint1`);
    if (response.status === 200) {
        let data: RobotData[] = await response.json();
        return data;
    }
    throw new Error("Response error in fetchRobotData");
}

/* For connection to the current account by robot's name*/
export async function sendRobotByName(name: string): Promise<boolean> {
    const response = await fetch(`/endpoint2/${name}`);
    if (!(response.status === 200)) {
        throw new Error("Response error in sendRobotByName");
    }
    return true;
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


export {type RobotData, type Names};