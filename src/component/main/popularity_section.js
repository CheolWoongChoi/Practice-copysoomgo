import React, { Component } from 'react';
import Slick from 'react-slick';

//const relative_url = '../../img/';
const service_data = [
    {image: 'math.jpg', title: '수학 과외', gosu_num: '0'},
    {image: 'guitar.jpg', title: '기타 레슨', gosu_num: '1'},
    {image: 'english.jpg', title: '영어 레슨', gosu_num: '2'},
    {image: 'vocal.jpg', title: '보컬 레슨', gosu_num: '3'}
]
const gosu_data = [
    {title: '1', name: 'a', grade: '0', hired_num:'11', address:'d'},
    {title: '2', name: 'b', grade: '1', hired_num:'22', address:'f'},
    {title: '3', name: 'c', grade: '2', hired_num:'33', address:'g'},
    {title: '4', name: 'd', grade: '3', hired_num:'44', address:'h'}  
]

//Slick Prev, Next 버튼
function PrevArrow(props) {
    const {className, onClick} = props

        return (
            <img src={require('../../img/prev_arrow.png')} alt="prev_arrow" 
                className={className} onClick={onClick}/>
        );
}

function NextArrow(props) {
    const {className, onClick} = props

        return (
            <img src={require('../../img/next_arrow.png')} alt="next_arrow" 
                className={className} onClick={onClick}/>
        );
}
  

export default class PopularitySection extends Component {
    
    renderPopularService({image, title, gosu_num}){
        return(
            <div key={title}>
                <img className="img_size" src={require('../../img/'+image)} alt="인기 서비스" />
                <h5><strong>{title}</strong></h5>
                <h6>최근 활동 중인 고수 : {gosu_num}명</h6>
            </div>
        )
    }

    renderActiveGosu({title, name, grade, hired_num, address}){
        return(
            <div key={title}>
                제목 : {title},
                이름 : {name},
                평점 : {grade},
                고용횟수 : {hired_num},
                주소 : {address}
            </div>
        )
    }

    render(){
        var settings = {
            arrows: true,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <div className="container-fluid" id="popularity_section">
                <div>
                    <div>
                        <h3><strong>숨고의 인기 서비스</strong></h3><br/><br/>
                            <div align="justify">
                                <Slick {...settings}>
                                    {service_data.map( data => this.renderPopularService(data) )}
                                </Slick>
                            </div><br/><br/>
                    </div>
                    <div>
                        <h3><strong>숨고의 활동 고수</strong></h3><br/><br/>
                            <div align="justify">
                                <Slick {...settings}>
                                    {gosu_data.map( data => this.renderActiveGosu(data) )}   
                                </Slick>
                            </div>
                    </div>
                </div><br/><br/><br/>
                <div id="gosu_intro" className="row">
                    <div align="center">
                        <h2><strong>도움이 필요한 모든 일에 빠르고 정확하게 숨은 고수를 찾아드려요</strong></h2>
                    </div>
                    <div id="help_info">
                        <div className="col-md-6">
                            <img src={require('../../img/gosu_image.png')} className="img-responsive" alt="고수 사진들"/>
                        </div>
                        <div className="col-md-6">
                            <br/>
                            <div>
                                <h4 className="help_info_title">1. 고수를 소개받으세요.</h4>
                                <p>
                                    더 이상 시간을 낭비하지 마세요. 필요한 일과 조건만 알려드려요. 그 이후엔 숨고가 딱! 맞는
                                    <br/>고수를 무료로 소개해 드릴게요.
                                </p>
                            </div>
                            <div>
                                <h4 className="help_info_title">2. 고수를 비교해보세요.</h4>
                                <p>
                                    요청 후 최대 48시간 내로 고수들의 맞춤 견적서를 받아보실 수 있어요. 견적서를 통해 쉽게 
                                    <br/>고수들을 비교할 수 있어요.
                            </p>
                            </div>
                            <div>
                                <h4 className="help_info_title">3. 고수를 선택하세요</h4>
                                <p>
                                    원하는 조건에 딱! 맞는 고수를 선택하세요. 직접연락을 해 세부 사항을 조율할 수 있어요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}