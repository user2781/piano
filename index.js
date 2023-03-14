const keys=document.querySelectorAll('.key'),
volumes=document.querySelector('.volume-slider input'),
keyscheckbox=document.querySelector('.keys-checkbox input')
let keysArr=[]
let audio=new Audio('audio/a.wav')
keys.forEach(key=>{
    //点击按键播放声音
    
    keysArr.push(key.dataset.key)
    key.addEventListener('click',()=>{
        audioPlay(key.dataset.key)
        
    })
})
function audioPlay(key){
    audio.src=`audio/${key}.wav`
    audio.load()
    let playpromise=audio.play()
    if (playpromise!==undefined) {
        playpromise.then(()=>{
            audio.play()
        }).catch(()=>{})
    }
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    console.log(clickedKey);
    clickedKey.classList.add('active')
    setTimeout(()=>{
        clickedKey.classList.remove('active')
    },150)
}

//设置音量进度条
const handleVolume=(e)=>{
    audio.volume = e.target.value
}
//设置键盘按键的显示与隐藏
const handlecheckbox=()=>{
    keys.forEach((e) => {
        e.classList.toggle('hide')
    });
}
//设置键盘事件 
const presskeys=(e)=>{
    if(keysArr.includes(e.key)){
        audioPlay(e.key)
    }
}


volumes.addEventListener('input',handleVolume)
keyscheckbox.addEventListener('click',handlecheckbox)
document.addEventListener('keydown',presskeys)