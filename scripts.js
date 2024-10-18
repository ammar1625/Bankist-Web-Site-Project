
"use strict";

//dom elements
let navBarLinksEl = document.querySelectorAll(".link");
let navBarEl = document.querySelector(".nav");

let featuresContainerEl = document.querySelector(".features-container");
let featuresSectionEl = document.querySelector(".features-section");

let operationsContainerEl = document.querySelector(".operations-container");
let operationsSectionEl = document.querySelector(".operations-section");

let testImonialsContainerEl = document.querySelector(".test-imonials-container");
let testImonialsSectionEl = document.querySelector(".test-emonials-section");

let footerSectionEl = document.querySelector(".footer-container");

let digitalBlurEl = document.querySelector(".blur-digital");
let growBlurEl = document.querySelector(".blur-grow");
let cardBlurEl = document.querySelector(".blur-card");

let transferBtnEl = document.querySelector(".btn-transfer");
let loanBtnEl = document.querySelector(".btn-loan");
let closeBtnEl = document.querySelector(".btn-close");

let tabIconEl = document.querySelector(".tab-icon");
let tabHeaderEl = document.querySelector(".tab-head-line");

let slidesEl = document.querySelector(".slides");
let leftArrowEl = document.querySelector(".left-arrow");
let rightArrowEl = document.querySelector(".right-arrow");

let leftDotEl = document.querySelector(".left");
let middleDotEl = document.querySelector(".middle");
let rightDotEl = document.querySelector(".right");

let openAccountNavBtnEl = document.querySelector(".open-account");
let openAccountfooterBtnEl = document.querySelector(".open-your-acc-btn");
let closeFormBtnEl = document.querySelector(".close-btn");
let overLayEl = document.querySelector(".overlay");
let OpenAccFormEl = document.querySelector(".model-container");



slidesEl.style.marginRight  = "0px";

//data elements
let textsAndIcons = {
    transferLabel : "Tranfser money to anyone, instantly! No fees, no BS.",
    transferIcon : `upload_2.png`,

    loanLabel : "Buy a home or make your dreams come true, with instant loans.",
    loanIcon : `home.png`,

    closeLabel : "No longer need your account? No problem! Close it instantly.",
    closeIcon  : `user.png`
}

//var to store slides margin value to use it in slide operation
let val = 0;
let isOverLay = false;

function performInactiveEffect()
{
    //loop through all the link elements in nav bar
    navBarLinksEl.forEach((link)=>{

        //attach moueover event to all links to keep only the mouse on link active 
        link.addEventListener("mouseover",function(){
            navBarLinksEl.forEach((el)=>{
                el.classList.add("inactive");
                
            });
           //keep the on mouse link active
            this.classList.remove("inactive");
        });

        //attach mouseleave event to all links to keep all the links active in case the mouse is no longer on one of them
        link.addEventListener("mouseleave",function(){
            navBarLinksEl.forEach((el)=>{
                el.classList.remove("inactive");
                
            });
        });
    })
}

function setNavBarToNormal()
{
    navBarEl.classList.remove("fixed");
    document.body.style.paddingTop = "0px";
}

function fixNavBarToTop()
{
    navBarEl.classList.add("fixed");
    document.body.style.paddingTop = "105px";
}
function setNavBarToFixed()
{
    window.addEventListener("scroll",function(){
       if(!isOverLay)
        {
            if(this.scrollY >= 200)
            {
               fixNavBarToTop();
            }
            else
            {
                setNavBarToNormal();
            } 
        }
        else
        {
           //setNavBarToNormal();
        }
       
    });
}

function displaySection(section)
{
    section.classList.remove("undisplayed");
}

function performVisualEffect(container)
{
    container.style.paddingTop = "10px";
}

function showSectionWithEffects(section,container)
{
    setTimeout(()=>{
        displaySection(section);
        performVisualEffect(container);
   },100)
}

function slideToLeft()
{
         
        leftArrowEl.addEventListener("click",()=>{
          
                if(slidesEl.style.marginRight ==="-2300px")
                {
                    val +=2300;
                    slidesEl.style.marginRight = `${val}px`;
                    focusOnDot(middleDotEl , leftDotEl ,rightDotEl);
                }
               else if(slidesEl.style.marginRight === "0px") 
                {
                    val +=2300;
                    slidesEl.style.marginRight = `${val}px`;
                    focusOnDot(leftDotEl , middleDotEl ,rightDotEl);
                }
                else
                {
                    val = -2300
                    slidesEl.style.marginRight = `${val}px`;
                    focusOnDot(rightDotEl , leftDotEl ,middleDotEl);
                    
                }
                
            });
}

function slideToRight()
{
    rightArrowEl.addEventListener("click",()=>{
        if(slidesEl.style.marginRight ==="0px") 
            {
                val-=2300;
                slidesEl.style.marginRight = `${val}px`;
                focusOnDot(rightDotEl , middleDotEl ,leftDotEl);
            }
            else if (slidesEl.style.marginRight === "2300px")
                {
                    val-=2300;
                    slidesEl.style.marginRight = `${val}px`;
                    focusOnDot(middleDotEl , leftDotEl ,rightDotEl);
                }
            else 
            {
                val = 2300;
                slidesEl.style.marginRight = `${val}px`;
                focusOnDot(leftDotEl , middleDotEl ,rightDotEl);
            }

    })
}

function PerformSlide()
{
    slideToLeft();
    slideToRight();
}

function slideByDotsClick()
{
    leftDotEl.addEventListener("click",()=>{
        val=2300;
        slidesEl.style.marginRight = `${val}px`;
        focusOnDot(leftDotEl , middleDotEl ,rightDotEl);
        
    });

    middleDotEl.addEventListener("click",()=>{
        val=0;
        slidesEl.style.marginRight = `${val}px`;
        focusOnDot(middleDotEl , leftDotEl ,rightDotEl);
        
    });

    rightDotEl.addEventListener("click",()=>{
        val=-2300;
        slidesEl.style.marginRight = `${val}px`;
        focusOnDot(rightDotEl , leftDotEl ,middleDotEl);
        
    });
}

function focusOnDot(selected , unselected1 , unselected2)
{
    selected.style.backgroundColor = "rgb(88, 87, 87)";
    unselected1.style.backgroundColor = "rgba(58, 57, 57, 0.37)";
    unselected2.style.backgroundColor = "rgba(58, 57, 57, 0.37)";
}





function showSection()
{
    window.addEventListener("scroll",function(){
        if(this.scrollY >= 255 && this.scrollY <1450)
            {
                    showSectionWithEffects(featuresSectionEl,featuresContainerEl);
            }
            else if(this.scrollY >= 1450 && this.scrollY <2200)
                { 
                    showSectionWithEffects(operationsSectionEl,operationsContainerEl);  
                }
            else if (this.scrollY >=2200 && scrollY <2900)
                { 
                    showSectionWithEffects(testImonialsSectionEl,testImonialsContainerEl);  
                }
                else if(this.scrollY > 2900)
                {
                    showSectionWithEffects(footerSectionEl,footerSectionEl);
                }
    });
}

function hideBlurEffect(blurEl)
{   
    setTimeout(()=>{
        blurEl.classList.add("hidden-blur");
    },250);
    
}

function performImageLazyLoad()
{
    window.addEventListener("scroll",()=>{
        if(scrollY>=600 && scrollY <900)
            {
                hideBlurEffect(digitalBlurEl);
            }
        else if(scrollY>=900 && scrollY<1200)
            {
                hideBlurEffect(growBlurEl);
            }
        else if(scrollY >=1200 && scrollY <1400)
            {
                hideBlurEffect(cardBlurEl);
            }
    })
   
}

function selectTab(selectedBtn , unselectedBtn1 , unselectedBtn2)
{
    selectedBtn.style.top = "-40px";
    unselectedBtn1.style.top = "-20px";
    unselectedBtn2.style.top = "-20px";
}

function switchTabTextAndIcon(tabText , tabIcon)
{
    tabIconEl.src = `images/${tabIcon}`;
    tabHeaderEl.textContent = tabText;
}

function performTabSelection()
{
    transferBtnEl.addEventListener("click",function(){
        selectTab(this , loanBtnEl , closeBtnEl);
        switchTabTextAndIcon(textsAndIcons.transferLabel , textsAndIcons.transferIcon);
    });

    loanBtnEl.addEventListener("click",function(){
        selectTab(this , transferBtnEl , closeBtnEl);
        switchTabTextAndIcon(textsAndIcons.loanLabel , textsAndIcons.loanIcon);
    });

    closeBtnEl.addEventListener("click",function(){
        selectTab(this , transferBtnEl , loanBtnEl);
        switchTabTextAndIcon(textsAndIcons.closeLabel , textsAndIcons.closeIcon);
    });
}

function displayOpenAccForm()
{
    overLayEl.classList.remove("hidden");
    OpenAccFormEl.classList.remove("hidden");
    isOverLay = true;
    setNavBarToNormal();
}

function performOpenAccFormDisplay()
{
    openAccountNavBtnEl.addEventListener("click",()=>{
        displayOpenAccForm();
    })

    openAccountfooterBtnEl.addEventListener("click",()=>{
        displayOpenAccForm();
    })
}

function hideOpenAccForm()
{
    closeFormBtnEl.addEventListener("click",()=>{
        overLayEl.classList.add("hidden");
        OpenAccFormEl.classList.add("hidden");
        isOverLay = false;
        
        if(scrollY>=200)
            {
                fixNavBarToTop();
            }
    })
}



performInactiveEffect();
setNavBarToFixed();
showSection();
performImageLazyLoad();
performTabSelection();
PerformSlide();
slideByDotsClick();
performOpenAccFormDisplay();
hideOpenAccForm();