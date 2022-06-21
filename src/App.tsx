import React from 'react';
import './App.css';
import CUHeader from './CUHeader/CUHeader';
import { useState,useEffect, useRef} from 'react';

function CUBanner() {
  return(
    <div className='visual_area'>
      <div className='line'></div>
      <div className='img_wrap'>
        <img className='text_img' src='./main_visual_logo_text_pc.png'></img>
        <img className='cu_character' src='./main_visual_illu.png'></img>
      </div>
      <div className='view_more'>
        <a href="#" className="link_more" title="cu스토리보기">
          <p className="link_text">cu 스토리 보기</p>
          <span className="icon_circle"></span>
        </a>
      </div>
    </div>
  )
}

function CUSwiper(){

  return(
    <div className='swiper_wrap'>
      <div className='swiper_slide'>
        <a href='#'>
          <img src='./slide1.jpg'></img>
        </a>  
      </div>
      <div className='swiper_slide'>
        <a href='#'>
          <img src='./slide2.jpg'></img>
        </a>
      </div>
      <div className='swiper_slide'>
        <a href='#'>
          <img src='./slide3.jpg'></img>
        </a>
      </div>
      <div className='swiper_slide'>
        <a href='#'>
          <img src='./slide4.jpg'></img>
        </a>
      </div>
    </div>
  )
}

function PocketCU(){
  return(
    <div className="inner_wrap">
              <div className="ly_flex">
                <div className="text_box">
                  <p className="title_p">차별화된 서비스와 풍성한 혜택이 가득!</p>
                  <p className="sub_p">포켓CU APP 사용해보세요^^</p>
                </div>
                <div className="obj">
                <img src="./1.png"></img>
                </div>
              <div className="link_area">
                  <a href="#" className="btn_go" target="_blank">포켓CU 설치 <span className="icon_down"></span></a>
                  <span className="icon_down"></span>
              </div>
              </div>
    </div>
  )
}

function Nowneed(){
  return(
    <div className='now_need'>
      <div className="inner_wrap">
        <h2 className="title">지금 나에게 필요한건?</h2>
        <p className="txt">CU의 다양한 상품들을 소개합니다!</p>
        <div className="cont_wrap">
          <div className="search_wrap">
            <input type="text" id="search_prd" className="input_search" placeholder="편스토랑 복돼지면을 검색해보세요!"></input>
            <a href="#" className="btn_search"><i className="hidden_i">검색</i></a>
          </div>
        </div>
      </div>
      <div className="category_wrap">
        <a href="#" className="cate01 big_ver">
          <img src="./2.png" alt="간편식사"></img>
          <span className="cate_name">간편식사</span>
        </a>
        <a href="#" className="cate02 big_ver">
          <img src="./3.png" alt="즉석조리"></img>
            <span className="cate_name font_black">즉석조리</span>
        </a>
        <a href="#" className="cate03 small_ver">
          <img src="./4.png" alt="스낵"></img>
          <span className="cate_name">스낵</span>
        </a>
        <a href="#" className="cate04 small_ver">
          <img src="./5.png" alt="아이스크림"></img>
          <span className="cate_name font_black">아이스크림</span>
        </a>
        <a href="#" className="cate05 small_ver">
          <img src="./6.png" alt="식품"></img>
          <span className="cate_name">식품</span>
        </a>
        <a href="#" className="cate06 small_ver">
          <img src="./7.png" alt="음료"></img>
          <span className="cate_name">음료</span>
        </a>
        <a href="#" className="cate07 big_ver">
          <img src="./8.png" alt="생활용품"></img>
          <span className="cate_name">생활용품</span>
        </a>
      </div>
    </div>
  ) 
}

function CUInfo(){
  return(
    <div className="info_banner">
      <div className="cont_wrap">
          <a href="#" className="franchise_bnr">
          <h2 className="title">창업안내</h2>
          <p className="txt">점주님들의 성공을 최우선으로 생각하는</p>
          <span className="arrow"><i className="hidden_i">더보기</i></span>
        </a>
      </div>
      <div className="cont_wrap">
          <a href="#" target="_blank" className="cs_bnr">
          <h2 className="title">고객센터</h2>
          <p className="txt">상품문의, 창업상담 무엇을 도와드릴까요?</p>
          <span className="arrow"><i className="hidden_i">더보기</i></span>
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <CUHeader/>
      </header>
      <section>
        <CUBanner/>
        <CUSwiper/>  
        <PocketCU/>    
        <Nowneed/>
        <CUInfo/>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
