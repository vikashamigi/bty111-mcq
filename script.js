const quizData = [
/* ================= TOPIC 1 ================= */
{question:"The nose of the redesigned Shinkansen bullet train is inspired by",options:["Kingfisher beak","Crane peak","Owl peak","Heron peak"],answer:0},
{question:"Passive cooling in skyscrapers is inspired by",options:["Termite mounds","Earthwork mounds","Ant mounds","Spiro mounds"],answer:0},
{question:"Belt movement of military tanks was inspired by",options:["Caterpillar movement","Termite movement","Ant movement","Butterfly movement"],answer:0},
{question:"Retinal prosthetic is approved by",options:["USFDA","USEPA","CPCB","SPCB"],answer:0},
{question:"GM corn gene is from",options:["Bacillus thuringiensis","Bacillus cereus","Bacillus subtilis","Bacillus anthracis"],answer:0},
{question:"Insecticidal protein is",options:["Cry protein","Res protein","Try protein","Taf protein"],answer:0},
{question:"Biofertilizers can",options:["Replace chemical N & P","Reduce crop yield","Destimulate growth","Reduce soil fertility"],answer:0},
{question:"Microstructure analysis of self-healing concrete",options:["SEM","XRD","FTIR","XPS"],answer:0},
{question:"Pollution control using bioreactor",options:["Biofiltration","Bioaugmentation","Bioleaching","Biomimetics"],answer:0},
{question:"Nanoparticle size range",options:["1–100 nm","1–100 mm","1–1000 nm","1–10 µm"],answer:0},
{question:"CNT strength compared to steel",options:["100 times","10","25","50"],answer:0},
{question:"Term nanotechnology coined by",options:["Norio Taniguchi","Richard Feynman","Eric Drexler","Alexander Fleming"],answer:0},
{question:"Width of carbon nanotube",options:["0.5–2.5 nm","0.1–0.5 nm","2.5–4.5 nm","4.5–6.5 nm"],answer:0},
{question:"Length of 10 hydrogen atoms",options:["7 nm","10 nm","2 nm","20 nm"],answer:0},
{question:"Human hair size",options:["50,000–100,000 nm","500–1000 nm","500,000–1,000,000 nm","50–100 nm"],answer:0},
{question:"Nano comes from",options:["Greek","French","Spanish","Latin"],answer:0},
{question:"Organic farming needed due to",options:["Environmental pollution","Poverty","Road accidents","Population"],answer:0},
{question:"Early cancer detection",options:["MRI","CCD","BBD","AIS"],answer:0},

/* ================= TOPIC 2 ================= */
{question:"Prokaryotic cell size",options:["0.1–5.0 µm","0.1–50 µm","10–50 µm","2–10 µm"],answer:0},
{question:"Cells without true nucleus",options:["Prokaryotic cells","Eukaryotic cells","Plant cells","Animal cells"],answer:0},
{question:"Organelles absent in",options:["Prokaryotic cells","Eukaryotic cells","Plant cells","Animal cells"],answer:0},
{question:"Chromosomal protein",options:["Histone","Heme","Cistone","Diastone"],answer:0},
{question:"Asexual division in prokaryotes",options:["Binary fission","Conjugation","Ligation","Mitosis"],answer:0},
{question:"Sexual reproduction in prokaryotes",options:["Conjugation","Binary fission","Ligation","Mitosis"],answer:0},
{question:"Outer protective covering",options:["Capsule","Cell wall","Cell membrane","Cytoplasm"],answer:0},
{question:"Protein synthesis organelle",options:["Ribosomes","Lysosomes","Mitochondria","Vacuoles"],answer:0},
{question:"Hair-like attachment structures",options:["Pili","Capsule","Flagella","Cilia"],answer:0},
{question:"Virus observed using",options:["Electron microscope","Light microscope","Naked eye","Fluorescent microscope"],answer:0},

/* ================= TOPIC 3 ================= */
{question:"The Greek word “Eu” means",options:["Well","Large","Round","Embryo"],answer:0},
{question:"Which is a eukaryotic cell?",options:["Protozoan","Virus","Bacteria","None"],answer:0},
{question:"Which is not a eukaryotic cell?",options:["Bacteria","Protozoan","Fungi","Animal"],answer:0},
{question:"Not a characteristic of eukaryotic cell",options:["Circular DNA","Membrane-enclosed nucleus","Membrane-bound organelles","Cytoskeleton"],answer:0},
{question:"Cell wall is present in",options:["Only plant cells","Only animal cells","Plant and animal cells","Protozoans"],answer:0},

/* ================= TOPIC 4 ================= */
{question:"Not a biomolecule",options:["Calcium sulphate","Carbohydrates","Lipids","Nucleic acids"],answer:0},
{question:"Lipids contain fatty acids and",options:["Glycerol","Alcohol","Hydrocarbon","Butanol"],answer:0},
{question:"Palmitic acid",options:["C16","C14","C18","C20"],answer:0},
{question:"No double bond fatty acids",options:["Saturated","Unsaturated","Trans","Cis"],answer:0},
{question:"Derived lipid",options:["Steroids","Phospholipids","Glycolipids","Waxes"],answer:0},

/* ================= TOPIC 5 ================= */
{question:"Not produced in photosynthesis",options:["Carbon dioxide","Oxygen","Organic compounds","Glucose"],answer:0},
{question:"Energy source for photosynthesis",options:["Light","ATP","Water","Oxygen"],answer:0},
{question:"Calvin cycle occurs in",options:["Stroma","Thylakoid","Grana","Chlorophyll"],answer:0},
{question:"ATP is a",options:["Nucleotide","Nucleoside","Protein","Lipid"],answer:0},
{question:"ATP from aerobic respiration",options:["38","2","22","18"],answer:0}
];

/* ================= QUIZ LOGIC ================= */

const quizDiv = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultDiv = document.getElementById("result");

function loadQuiz() {
    quizDiv.innerHTML = "";
    quizData.forEach((q, index) => {
        let html = `<div class="question">${index+1}. ${q.question}</div><div class="options">`;
        q.options.forEach((opt,i)=>{
            html += `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`;
        });
        html += `</div>`;
        quizDiv.innerHTML += html;
    });
}

submitBtn.onclick = () => {
    let score = 0;
    quizData.forEach((q,i)=>{
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if(selected && parseInt(selected.value) === q.answer){
            score++;
        }
    });
    resultDiv.innerHTML = `🎯 Your Score: ${score} / ${quizData.length}`;
};

loadQuiz();
