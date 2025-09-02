const Me = () => (
    <img 
        src="https://cdn.discordapp.com/attachments/708702600555528223/1412430631920468060/20250820_130101.jpg?ex=68b84408&is=68b6f288&hm=ae170be86cd96d55b8b6c6fde6fcf15f140d5f0e7dc28b36aeb9faa84a2fbde0&" 
        alt="User"
        style={{
            borderRadius: '60%',
            width: '60px',
            height: '60px',
            border: '2px solid #d31212ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#c31c09ff', margin: '10px 0' }}>
        ชื่อ: ปรวัฒน์  ชาวไร่นาค
    </h3>
);

const UserBio = () => (
    <div>
        <p>รหัสนักศึกษา: 660710722</p>
        <p>ชั้นปี: 3 </p>
        <p>คณะ:วิทยาศาสตร์</p>
        <p>สาขา:เทคโนโลยีสารสนเทศ</p>
        <p>สถานศึกษา: มหาวิทยาลัยศิลปากร</p>
        <p>Email: chawrainak_p@silpakorn.edu</p>
        <p>เบอร์โทร:0638822223</p>
    </div>   
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Me/>
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;