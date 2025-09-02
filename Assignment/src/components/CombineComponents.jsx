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
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#ecf59aff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Monday
                </h2>
                <RoutineMonday />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#f099e9ff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Tuesday
                </h2>
                <RoutineTuesday />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#98efc5ff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Wednesday
                </h2>
                <RoutineWednesday />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#eeb116ff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Thursday
                </h2>
                <RoutineThursday />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#78ddf6ff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Friday
                </h2>
                <RoutineFriday />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#cd9af5ff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Saturday
                </h2>
                <RoutineSaturday/>
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #36BA3D',
                borderRadius: '8px',
                backgroundColor: '#f59292ff'
            }}>
                <h2 style={{ color: '#36BA3D', marginBottom: '20px' }}>
                    Sunday
                </h2>
                <RoutineSunday />
            </section>
        </div>
    );
}

export default CombineComponents;
