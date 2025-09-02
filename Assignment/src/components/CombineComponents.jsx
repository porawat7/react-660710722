import React from 'react';
import Welcome from './welcome';
import Profile from './profile';

import RoutineMonday from './routine_monday';
import RoutineTuesday from './routine_tuesday';
import RoutineWednesday from './routine_wednesday';
import RoutineThursday from './routine_thursday';
import RoutineFriday from './routine_friday';
import RoutineSaturday from './routine_saturday';
import RoutineSunday from './routine_sunday';

function CombineComponents() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>           
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#072035ff'
            }}>
                <Welcome />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#71baf5ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    📖 Profile
                </h2>
                <Profile />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#ccf6f3ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    📝 รายการที่ต้องทำในแต่ละวัน
                </h2>
                <RoutineMonday />
                <RoutineTuesday />
                <RoutineWednesday />
                <RoutineThursday />
                <RoutineFriday />
                <RoutineSaturday />
                <RoutineSunday />
            </section>
        </div>
    );
}

export default CombineComponents;
