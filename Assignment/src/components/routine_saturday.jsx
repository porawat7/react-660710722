import React from 'react';

const routine_saturday = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'ตื่นนอน 10:00-11:05', completed: true },
        { id: 2, text: 'อาบน้ำ 11:05-11:25', completed: true },
        { id: 3, text: 'ทานอาหารเที่ยง 11:25-12:10', completed: true },
        { id: 4, text: 'เล่นเกม 12:10-15:00', completed: true },
        { id: 5, text: 'เคลียร์งานที่ค้างไว้ 15:00-17:00', completed: true },
        { id: 6, text: 'ทานอาหารเย็น 17:00-18:00', completed: true },
        { id: 7, text: 'อาบน้ำ 18:00-18:30', completed: true },
        { id: 8, text: 'เล่นเกม 18:30-22:00', completed: true },
        { id: 9, text: 'อ่านนิยาย 22:00-24.00', completed: true },
        { id: 10, text: 'นอน 24.00-10.00', completed: true },
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำ</h3>
            
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
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};
export default routine_saturday;