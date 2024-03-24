import Link from 'next/link';

export default function Write() {
    let time = new Date();

    return (
        <div className="container">
            <div className="left">
                <div className="control_btn">
                    <button className="cb1"></button>
                    <button className="cb2"></button>
                    <button className="cb3"></button>
                </div>
                <div className="info">
                    <img src="img/psa.png" alt="" />
                    <div className="info_r">
                        <h3>수환의 Note </h3>
                        <p>내 정보 보기</p>
                    </div>
                </div>
                <div className="menu">
                    <h5>개인 페이지</h5>
                    <ul>
                        <li>
                            <Link href="/list">MEMO</Link>
                        </li>
                        <li>
                            <Link href="/list">오늘의 일기</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="r_head">
                    <div className="r_head_menu">
                        <Link href="/list">목록</Link>
                        <Link href="/write">글쓰기</Link>
                        <Link href="/">삭제</Link>
                    </div>
                    <div className="r_head_search"></div>
                </div>
                <div className="memo_body">
                    <div className="memo_write">
                        <input
                            type="text"
                            name="time"
                            value={time}
                            style={{
                                width: '100%',
                                border: 'none',
                                textAlign: 'center',
                                color: '#999',
                                marginBottom: '40px',
                                outline: 'none',
                            }}
                            readOnly
                        />
                        <input
                            type="text"
                            placeholder="메모제목"
                            name="title"
                            style={{
                                width: '100%',
                                border: 'none',
                                borderBottom: '1px solid #ddd',
                                textAlign: 'left',
                                color: '#333',
                                padding: '10px',
                                boxSizing: 'border-box',
                                outline: 'none',
                            }}
                        />
                        <textarea
                            name="text"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="메모내용"
                            style={{
                                width: '100%',
                                border: 'none',
                                borderBottom: '1px solid #fff',
                                textAlign: 'left',
                                color: '#333',
                                padding: '10px',
                                boxSizing: 'border-box',
                                resize: 'none',
                                outline: 'none',
                            }}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
