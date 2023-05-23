import React from 'react';
import '../../../css/FoundingChapter.css';

export default () => {
  const title = 'Founding Chapter';
  // const content = 'paragraph';
  const foundingFathers = [
    'Founding Fathers',
    'Sean Aguon',
    'Jeffrey Chao',
    'Charleston Chua',
    'Christopher Doan',
    'Andy Ha',
    'Steven Ly',
    'Hector Miguel',
    'Tommy On',
    'Zephyrene Villaluz',
    'Michael Wang',
    'Anthony Yi',
  ];
  const alphaClass = [
    'Alpha Class',
    'Jefferson Bustarde',
    'Markus Caligdong',
    'Jeff Creedon',
    'Steven Flores',
    'TJ Garcia',
    'Andrew Lau',
    'Sang Lee',
    'Travis Nguyen',
    'Daniel Taing',
    'Gabriel Uy',
    'Anthony Villalba',
  ];
  const betaClass = [
    'Beta Class',
    'Mark Dave Almachar',
    'Abraham Cheng',
    'Michael Chewjalearn',
    'Justin Choi',
    'Christopher Frias',
    'Scotty Huynh',
    'Kalena Pelekai-Wai',
    'Daniel Vu',
  ];
  const classes = [foundingFathers, alphaClass, betaClass];
  let displayArr = [];
  for (let i = 0; i < classes.length; i++) {
    displayArr.push(<Classes class={classes[i]} key={i}></Classes>);
  }
  return (
    <main>
      <div className="main-content-wrapper">
        <div className="text-center text-white">
          <h1 className="display-3">
            <strong>{title}</strong>
          </h1>
          <div className="main-content-paragraph-wrapper" id="brothers-list">
            {displayArr}
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Gamma Class</div>
              <li>Tony Boffelli</li>
              <li>Ronnie Corcuera</li>
              <li>Aren Hirano</li>
              <li>Erik Ibarra</li>
              <li>Marcus Krueger</li>
              <li>James Kuzhipalla</li>
              <li>Kawena Lee</li>
              <li>Kevin Rodriguez</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Delta Class</div>
              <li>Robert Aker</li>
              <li>Emil Almachar</li>
              <li>Kamran Baig</li>
              <li>Steven Eng</li>
              <li>David Perez</li>
              <li>Stevanus Pradipa</li>
              <li>David Silva</li>
              <li>David Waihenya</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Epsilon Class</div>
              <li>Robert Alvarez</li>
              <li>Deo Bustarde</li>
              <li>Ryan Fong</li>
              <li>Warren Kao</li>
              <li>Danny Lee</li>
              <li>Steven Leung</li>
              <li>Ian Nato</li>
              <li>Dennis Park</li>
              <li>Jason Phan</li>
              <li>David Ramirez</li>
              <li>Jiruth Samerthai</li>
              <li>Sonny Tao</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Zeta Class</div>
              <li>Ian Cabanilla</li>
              <li>Austin Eskola</li>
              <li>Steven Lam</li>
              <li>Tyler McWilliams</li>
              <li>Kevin Rosario</li>
              <li>David Thantacheva</li>
              <li>Kevin Wang</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Eta Class</div>
              <li>AJ Cabuang</li>
              <li>Andrew Helige</li>
              <li>Tyler Kinney</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Theta Class</div>
              <li>Kavindu Amarasinghe</li>
              <li>RB Rom</li>
              <li>Joshoua Staana</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Iota Class</div>
              <li>Ricardo Aker</li>
              <li>Geoffrey Kirk Alcaraz</li>
              <li>Christian Aranas</li>
              <li>William Brown</li>
              <li>Paul Caraos</li>
              <li>Nathan Hagarty</li>
              <li>Anthony Ko</li>
              <li>Paul Ko</li>
              <li>Danny Phung</li>
              <li>Jordan Serrano</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Kappa Class</div>
              <li>Josh Cano</li>
              <li>Jacob Davis</li>
              <li>Gabe Delos Santos</li>
              <li>Victor Li</li>
              <li>Chris Ngo</li>
              <li>Baltazar Pulido</li>
              <li>Mickey Rosal</li>
              <li>Mauricio Solorio</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Lambda Class</div>
              <li>Raul Esteves</li>
              <li>Hung Le</li>
              <li>Nevin Ly</li>
              <li>Floyd Ngov</li>
              <li>Will Peruel</li>
              <li>Damian Van</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Mu Class</div>
              <li>Christian Corabo</li>
              <li>Jeff Kwong</li>
              <li>Jericho Sadorra</li>
              <li>Sirasit Punnanithi</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Nu Class</div>
              <li>Ryan Kim</li>
              <li>Raphael Perry</li>
              <li>Kevin Samuel</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Xi Class</div>
              <li>Juan Carlos Comahig</li>
              <li>Allister Magalued</li>
              <li>Ivan Samuel</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Omicron Class</div>
              <li>Alan Cruz</li>
              <li>Brendan Hopson</li>
              <li>Jaemin Lee</li>
              <li>Benjamin Ly</li>
              <li>Isaiah Marcello</li>
              <li>Micah Soga</li>
              <li>Ethan Tsuneta</li>
              <li>Tim Wong</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Pi Class</div>
              <li>Derick Nguyen</li>
              <li>Alex Pham</li>
              <li>Joey Pontillas</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Rho Class</div>
              <li>Saebyuk Lee</li>
              <li>Nathan Toralba</li>
              <li>Albert Tran</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Sigma Class</div>
              <li>Keanu Aloua</li>
              <li>Marlou DeCastro</li>
              <li>Justin Fan</li>
              <li>Josh Insorio</li>
              <li>Brent Kuruma</li>
              <li>Brian Nguyen</li>
              <li>Kenneth Saronghilo</li>
              <li>Marcus Son</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Tau Class</div>
              <li>Joseph Cano</li>
              <li>Vincent Lee</li>
              <li>Ian Sin</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Upsilon Class</div>
              <li>Nicholas Hong</li>
              <li>Junior Macatlang</li>
              <li>Henry Shi</li>
              <li>Carlos Vega-Reza</li>
            </ul>
            <ul className="founding-chapter-list">
              <div className="founding-chapter-titles">Phi Class</div>
              <li>Eadrian Carreon</li>
              <li>Jeremy Co</li>
              <li>Dylan Dang</li>
              <li>Morgan Hunt</li>
              <li>Gavin Ide</li>
              <li>Sean Luna</li>
              <li>Jhamin Mondragon</li>
              <li>Larsen So</li>
              <li>Shangqi Xue</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

function Classes(props) {
  let classDisplay = [];
  for (let i = 1; i < props.class.length; i++) {
    classDisplay.push(<li>{props.class[i]}</li>);
  }
  return (
    <ul className="founding-chapter-list">
      <div className="founding-chapter-titles">{props.class[0]}</div>
      {classDisplay}
    </ul>
  );
}
