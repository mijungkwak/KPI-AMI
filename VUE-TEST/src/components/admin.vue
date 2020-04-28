<template>
    <main role="main">
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container d-flex justify-content-between">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <strong>Automation</strong>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>

        <section class="jumbotron text-center">
            <div class="container">
                <h1>차량등록 신청</h1>
                <p class="lead text-muted"></p>
            </div>
        </section>

        <div class="container">
        <hr class="mb-4">
        <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted" style="padding-left:80px;">차량 이미지 등록</span>
                </h4>
                <hr class="mb-4">
                <ul class="list-group mb-3">

                        <div id="imagePreview">
                                <img v-if="imageUrl" :src="imageUrl" style="width:320px;height:250px;">
                                <img v-else :src="imageUrl" style="width:320px;height:250px;">
                        </div>

                </ul>
                <form class="card p">
                    <input ref="imageInput" type="file" hidden @change="onChangeImages">
                    <button type="button" class="btn btn-secondary" @click="onClickImageUpload">이미지 업로드</button>
                </form>

                <!--                    
                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">-$5</span>
                    </li> 초록-->

            </div>

            <div class="col-md-8 order-md-1">
                <form class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="carnum">차량번호를 입력해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">1</span>
                            </div>
                            <input type="text" class="form-control" id="carnum" placeholder="ex) 12가3456" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                차량정보는 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="modelname">모델명을 입력해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">2</span>
                            </div>
                            <input type="text" class="form-control" id="modelname" placeholder="ex) 제네시스 G90" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                모델명은 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="modelsize">크기를 선택해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">3</span>
                            </div>
                            <select class="form-control" id="modelsize" required>
                                <option selected="selected">경차</option>
                                <option>소형</option>
                                <option>중형</option>
                                <option>대형</option>
                                <option>기타</option>
                            </select>
                            <div class="invalid-feedback" style="width: 100%;">
                                크기는 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="modelcolor">색상을 입력해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">4</span>
                            </div>
                            <input type="text" class="form-control" id="modelcolor" placeholder="ex) 검정" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                색상은 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="modelcolor">배기량을 입력해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">5</span>
                            </div>
                            <input type="text" class="form-control" id="displace" placeholder="ex) 3500" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                배기량은 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="fuelname">연료를 선택해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">6</span>
                            </div>
                            <select class="form-control" id="fuelname" required>
                                <option selected="selected">휘발유</option>
                                <option>경유</option>
                                <option>하이브리드</option>
                                <option>전기</option>
                                <option>LPG</option>
                                <option>기타</option>
                            </select>
                            <div class="invalid-feedback" style="width: 100%;">
                                연료는 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="price">가격을 입력해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">7</span>
                            </div>
                            <input type="text" class="form-control" id="price" placeholder="ex) 0,000/시간" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                가격은 필수항목입니다.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="price">재고를 입력해주세요</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">8</span>
                            </div>
                            <input type="text" class="form-control" id="modelcnt" placeholder="ex) 10" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                재고는 필수항목입니다.
                            </div>
                        </div>
                    </div>
                    <!--
                    <hr class="mb-4">
                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                            <label class="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="debit">Debit card</label>
                        </div> 콤보박스
                    </div> -->
                </form>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" @click="onClicksubmit" type="submit">차량 등록</button>
                    <p style="padding-bottom: 30px;"></p>
            </div>
            </div>
        </div>
    </main>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js" ></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
var urlList = require('../assets/url.json');
const urlJSON = JSON.stringify(urlList);
const parseURL = JSON.parse(urlJSON);
var myurl = "http://" + parseURL.myip + ":8080/api";

var dataUrl;
export default {
    data() {
        return {
            imageUrl: null,
        }
    },
    methods: {
        onClickImageUpload() {
            this.$refs.imageInput.click();
        },
        onChangeImages(e) {
            console.log(e.target.files);
            if(this.imageUrl==null) {
                const file = e.target.files[0];
                this.imageUrl = URL.createObjectURL(file);

                var reader = new FileReader();
                reader.onload = function(e) {
                    this.imageSrc = e.target.result;
                    dataUrl = this.imageSrc;
                };
                reader.onerror = function(error) {
                    alert(error);
                };
                reader.readAsDataURL(file);

            }
            else { 
                console.log("Good"); 
            }
        },
        onClicksubmit() {
            //console.log(dataUrl);
            var model = "";
            model = document.querySelector("#modelname").value;
            
            axios.post(myurl+'/enroll', {
                
                "code" : document.querySelector("#carnum").value,
                "name" : document.querySelector("#modelname").value,
                "price" : parseInt(document.querySelector("#price").value),
                "color" : document.querySelector("#modelcolor").value,
                "fuel" : document.querySelector("#fuelname").value,
                "displacement" : parseInt(document.querySelector("#displace").value),
                "size" : document.querySelector("#modelsize").value,
                "imageUrl" : dataUrl,
                "cnt" : parseInt(document.querySelector("#modelcnt").value)
            })
            .then(function(response){
                if(response.data=="error") {
                    alert("차량번호 중복!!");
                }
                else {
                    alert("차량등록 완료!!");
                    location.reload();
                }
            })
            this.$router.push('/main');
        }
    }
}

</script>
