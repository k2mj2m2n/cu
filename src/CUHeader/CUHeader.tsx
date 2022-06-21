import React from 'react';
import './CUHeader.css';

function CUHeader() {
    return(
        <div className='CuHead'>
            <div className='login_menu'>
                <ul>
                    <li><a>로그인</a></li>
                    <li><a>점주인증</a></li>
                    <li><a>점주광장</a></li>
                </ul>
            </div>
            <div className='inner_wrap'>
                <h1 className='logo'>
                    <a href='./index.html'><img src="./logo.png" alt="CU"></img></a>
                </h1>
                <div className='gnb'>
                    <ul>
                        <li><a href='#'>CU소개</a>
                            <ul className='sub_depth'>
                                <li><a href='#'>브랜드스토리</a></li>
                                <li><a href='#'>디지털 사보</a></li>
                                <li><a href='#'>CU갤러리</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>상품·서비스</a>
                            <ul className='sub_depth'>
                                <li><a href='#'>전체 상품</a></li>
                                <li><a href='#'>CU 차별화 상품</a></li>
                                <li><a href='#'>행사상품</a></li>
                                <li><a href='#'>생활편의 서비스</a></li>
                                <li><a href='#'>제휴카드</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>매장안내</a>
                        </li>
                        <li><a href='#'>멤버십</a>
                            <ul className='sub_depth'>
                                <li><a href='#'>멤버십 소개</a></li>
                                <li><a href='#'>포켓CU</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>창업·상생</a>
                            <ul className='sub_depth'>
                                <li><a href='#'>사업의 이해</a></li>
                                <li><a href='#'>가맹조건</a></li>
                                <li><a href='#'>창업 설명회</a></li>
                                <li><a href='#'>창업 성공기</a></li>
                                <li><a href='#'>점포물건</a></li>
                                <li><a href='#'>상생혜택</a></li>
                                <li><a href='#'>거래상담</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>새로운소식</a>
                            <ul className='sub_depth'>
                                <li><a href='#'>CU소식</a></li>
                                <li><a href='#'>이거어때</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='language'>
                    <a href='#'>
                        KR
                    </a>
                    <ul>
                        <li className='on'><a href='#'>KR</a></li>
                        <li><a href='#'>EN</a></li>
                        <li><a href='#'>CN</a></li>
                    </ul>
                </div>
                <div className='toggle_menu'>
                    <a href='#'>
                        <img src="../btn_menu_ico.png" alt="메뉴"></img>
                    </a>
                </div>
            </div>
        </div>    
    )
    }
    
export default CUHeader;
