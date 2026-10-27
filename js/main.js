(function(){
var S=[
["dashboard","لوحة التحكم","g"],["products","قائمة المنتجات","p"],["add-product","إضافة منتج","p"],["product-filter","تصفية وترتيب المنتجات","p"],["categories","التصنيفات","p"],["inventory-export","تصدير المخزون","p"],["barcode-labels","ملصقات الباركود","p"],["label-preview","معاينة الملصق","p"],["stock-alerts","تنبيهات المخزون","p"],
["pos","نقطة البيع","s"],["sales-history","سجل المبيعات","s"],["invoice","تفاصيل الفاتورة","s"],["invoice-export","خيارات تصدير الفاتورة","s"],
["purchases","المشتريات","u"],["new-purchase","فاتورة شراء جديدة","u"],["suppliers","الموردون","u"],["supplier-statement","كشف حساب مورد","u"],["expenses","المصاريف","u"],
["reports-today","التقارير","r"],["reports-top","الأكثر والأقل مبيعاً","r"],["reports-export","تصدير التقارير","r"],["profit-report","تقرير الأرباح","r"],
["settings","الإعدادات","t"],["store-info","بيانات المتجر","t"],["general-settings","الإعدادات العامة","t"],["backup","النسخ الاحتياطي","t"],["lock","شاشة القفل","t"],["language","اللغات","t"],["theme","المظهر","t"]];
var G=document.getElementById("gal"),cur=0,list=S.slice();
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function render(f){
list=S.filter(function(x){return f==="all"||x[2]===f});
G.innerHTML=list.map(function(x,i){return '<button class="shot" data-i="'+i+'"><img loading="lazy" src="assets/screens/'+x[0]+'.png" alt="'+esc(x[1])+'"><span>'+esc(x[1])+'</span></button>'}).join("")}
render("all");
document.getElementById("chips").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;
document.querySelectorAll(".chip").forEach(function(c){c.classList.remove("on")});b.classList.add("on");render(b.dataset.f)});
var lb=document.getElementById("lb"),li=document.getElementById("lbi"),lc=document.getElementById("lbc");
function show(i){cur=(i+list.length)%list.length;li.src="assets/screens/"+list[cur][0]+".png";li.alt=list[cur][1];lc.textContent=list[cur][1]+" ("+(cur+1)+"/"+list.length+")"}
function open(i){show(i);lb.classList.add("open");document.body.style.overflow="hidden"}
function close(){lb.classList.remove("open");document.body.style.overflow=""}
G.addEventListener("click",function(e){var b=e.target.closest(".shot");if(b)open(+b.dataset.i)});
document.querySelectorAll("[data-open]").forEach(function(im){im.addEventListener("click",function(){
var k=im.dataset.open;list=S.slice();open(S.findIndex(function(x){return x[0]===k}))})});
document.getElementById("lbx").onclick=close;
document.getElementById("lbp").onclick=function(){show(cur-1)};
document.getElementById("lbn").onclick=function(){show(cur+1)};
lb.addEventListener("click",function(e){if(e.target===lb)close()});
document.addEventListener("keydown",function(e){if(!lb.classList.contains("open"))return;
if(e.key==="Escape")close();
if(e.key==="ArrowLeft")show(cur+1);if(e.key==="ArrowRight")show(cur-1)});
var t0=0;lb.addEventListener("touchstart",function(e){t0=e.touches[0].clientX});
lb.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-t0;if(Math.abs(d)>50)show(d>0?cur-1:cur+1)});
})();
