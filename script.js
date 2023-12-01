window.onload = function() {
    shuffleList();
};

function shuffleList() {
    var names = [
        { name: ' ماهر المعيقلي', link:'https://youtu.be/c7FzGeaOMlE?si=3TY7Q2PNzy-KX3RY' },
        { name: 'عبد الرحمن السديس', link:'https://youtu.be/hOjRbdA1cTY?si=IsljtBmzW7G7EwEh' },
        { name: ' ياسر الدوسري', link:'https://youtu.be/bTS7fPWz6ws?si=kh_nrTRZKYNXTNSs' },
        { name: 'سعود الشريم', link:'https://youtu.be/UQhSaz0SFOk?si=9k5Vliir9Wm5BEXs' },
        { name: ' بندر بليلة', link:'https://youtu.be/Ud8GsAExuIg?si=esGm7Ka5TNqlHLeA' },
        { name: 'مشاري العفاسي', link:'https://youtu.be/LGfrMJHLCO8?si=JKQBR-njYSlD6zQ2' },
        { name: 'ناصر القطامي', link:'https://youtu.be/5goHh4Uw9f0?si=SHjdEkcp-AoVIXAX'  },
        { name: 'إدريس أبكر', link:'https://youtu.be/Psv7WNDJyMc?si=qKD8rhnmMrTXzlD2' },
        { name: 'أحمد العجمي', link:'https://youtu.be/WA4XhMo1BZc?si=6LJ7W-HLlAbhr10V' },
        { name: 'فارس عباد', link:'https://youtu.be/mU202esARY4?si=3Gc_ZOjWceHTyNYc' },
        { name: 'إسلام صبحي', link:'https://youtu.be/wqI-auEGggc?si=Wlo7KqqXGbpF7qux' },
        { name: 'هزاع البلوشي', link:'https://youtu.be/huN8uQQPCrA?si=6XtQNG79vqahjaWb' },
        { name: 'رعد الكردي', link:'https://youtu.be/DhOD5GYYIec?si=Hfm71DgGIPdQ219Z' },
        { name: 'عبد الرحمن مسعد', link:'https://youtu.be/WsuweoSSg2Y?si=Fzz5I_xB37zH-1yC' },
        { name: 'ابراهيم الاخضر', link:'https://youtu.be/acQ_2btVzR4?si=SVZ47v0F8jdV2rCW' },
    ];

    var ul = document.getElementById('nameList');
    names.forEach(function(item) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = item.link; 
        a.textContent = item.name;  
        li.appendChild(a);
        ul.appendChild(li);
    });

    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    var lis = ul.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.marginBottom = '75px';
} 
}