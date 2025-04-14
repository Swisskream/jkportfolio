import '../assets/Goals.css';
import React, {useState} from 'react';

function Goals(){
    const [goalsInput, setGoalsInput] = useState('');
    const [achieveDate, setAchieveDate] = useState('');
    const [attainGoal, setAttainGoal] = useState([]);

    const today = new Date();

    const addGoal = () => {
        const newGoal = {
            description: goalsInput,
            achieveDate: achieveDate,
            done: false,
        };

        const goalDate = new Date(achieveDate);

        if(goalDate.getTime() > today.getTime()){
            setAttainGoal([...attainGoal, newGoal]);
        }else{
            alert("Goal must be in the future!")
        }

        setGoalsInput('');
        setAchieveDate('');
    };

    const toggleGoalDone = (index) => {
        const updateGoals = (goals) => {
          const updatedGoals = goals.map((goal, i) =>
            i === index ? { ...goal, done: !goal.done } : goal
          );
          return updatedGoals;
        };

        setAttainGoal(updateGoals(attainGoal));
    };

    const createGoalElement = (goal, index) => (
        <div className='goalItem' key={index}>
            <input
                type='checkbox'
                checked={goal.done}
                onChange={() => toggleGoalDone(index)}
            />
            <label style={{textDecoration: goal.done ? 'line-through' : 'none'}}>
                {goal.description} (Acheive by: {goal.achieveDate} )
            </label>
        </div>
    );

    return(
        <html>
            <h2 id='h2Goals'>Goals</h2>

            <div id='goalsBox'>
                {attainGoal.map((goal, index) => createGoalElement(goal, index))}
            </div>

            <div id='goalAdd'>
                <input
                    type='text'
                    value={goalsInput}
                    id='goalsInput'
                    onChange={(e) => setGoalsInput(e.target.value)}
                    placeholder='Enter goal...'
                    />
                <input
                    type='date'
                    value={achieveDate}
                    id='achieveDate'
                    onChange={(e) => setAchieveDate(e.target.value)}
                    placeholder='Date to achieve goal by'
                    />
                <button onClick={addGoal} id='goalsButton'>Add Goal</button>
            </div>
        </html>
    );
}

export default Goals;