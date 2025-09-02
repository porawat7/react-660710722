import React from 'react';

const routine_thursday = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'ตื่นนอน 05:50-06:00', completed: true },
        { id: 2, text: 'อาบน้ำ 06:00-06:20', completed: true },
        { id: 3, text: 'ทานอาหารเช้า 06.20-6:40', completed: true },
        { id: 4, text: 'ไปมหาวิทยาลัย 6:40-8:30', completed: true },
        { id: 5, text: 'เข้าเรียน 8:30-12.05 PM', completed: true },
        { id: 6, text: 'ทานอาหารกลางวัน 12:05-13:00', completed: true },
        { id: 7, text: 'เข้าเรียนคาบบ่าย 13:00-16:40', completed: true },
        { id: 8, text: 'กลับบ้าน 16:40-17:00', completed: true },
        { id: 9, text: 'อาบน้ำ 17:00-17:20', completed: true },
        { id: 10, text: 'ทานอาหารเย็น 17:20-18:00', completed: true },
        { id: 11, text: 'ทำการบ้าน 18:00-19:30', completed: true },
        { id: 12, text: 'เล่นเกม 19:30-21:30', completed: true },
        { id: 13, text: 'เล่นเกม 19:30-22:00', completed: true },
        { id: 14, text: 'นอน 22:00-5.50', completed: true },

    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            
            <h4>วันพฤหัสบดี</h4>
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                 ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default routine_thursday;