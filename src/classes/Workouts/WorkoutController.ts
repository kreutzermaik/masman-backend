import csv from 'csv-parse';
import fs from 'fs';

class WorkoutController {

    phase = [];
    workout = [];
    filteredWorkouts = [];

    private parseCSV() {
        fs.createReadStream('csv/phase17.csv')
            .pipe(csv())
            .on('data', (data) => this.phase.push(data))
            .on('end',() => this.phase);
    }

    public async getWorkouts(week, workoutId) {

        await this.parseCSV();

        return new Promise((resolve) => {
            setTimeout(() => {
                for(let i = 1; i < this.phase.length; i++) {
                    if(this.phase[i][2] == week) {
                        if(this.phase[i][5] == workoutId) {
                            this.workout.push({
                                level: this.phase[i][0],
                                phase: this.phase[i][1],
                                week: this.phase[i][2],
                                id: this.phase[i][3],
                                day: this.phase[i][4],
                                workout: this.phase[i][5],
                                name: this.phase[i][6],
                                exNumber: this.phase[i][7],
                                intensity: this.phase[i][8],
                                set1: this.phase[i][9],
                                set2: this.phase[i][10],
                                set3: this.phase[i][11],
                                set4: this.phase[i][12]
                            });
                        }
                    }
                }

                // remove duplicates
                this.filteredWorkouts = this.workout.filter((v, i, a) => {
                    return a.findIndex(t => (t.id === v.id && t.name === v.name)) === i;
                });

                resolve(this.filteredWorkouts);

            }, 100);
        });
    }
}

export default new WorkoutController();
