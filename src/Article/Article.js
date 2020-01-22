import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Zoom, Fade} from 'react-reveal';
import './Article.css'

export default class Article extends Component{
  constructor(props){
      super(props);
      this.state = {
      }
  }
  render(){
      return(
        <div className="flex justify-center home">
          <Header />
            <div className="main flex justify-center">
              <div className="primary card">
                <Fade>
                  <h3 id="article-title">Some Featured Article Here I Guess</h3>
                  <p>Aque nonsequi conseceror re, si dolessunt am, num ipsaes accus velignatur? Quidi dolorporerio odis eveles aut utatiusciae ducias simint hiliassim accuste cus excersperi od ea delia aditius et eaquia doluptatesti ut asperia doluptiandis solum, quiducid eos diae corehendam arum landips andendias esto cor audam il mos con pra alicia pratiae porempo rerupis alis idionectem elenda volupta quaeste sequosa nturest exceperrorem et latquatur apidel mi, quassum quis esequid eliqui tes mincil illiquo et dolo omnis quia natias adissumquod quatqui aut adis iunt resciduci ut praere volo modionsed ulparum utMi, corioreped qui non remquam corepero quam, coribea comnien imaioritenis reium nonsequiatur, quatiae. Et moluptatem fuga. Ut oditate simagni ssequis et, natur, solut a sunt. </p>
                  <p>Porro cuptasp eribusam nempos et rerum fuga. Nam exerspe porporia int omnisim agnihit rem es si aligendae prorerum dignit, imet offictotatio mil id excernat dellore ptatur simillaborro eosandaeped elest, tem de corem et omnisci doluptaquam is con et ad modi dolorepel maximillaut que voloreces nim fugias excestet ipienis estorestore redolorerio quam quidebiti odigenit volorpores voluptatia alique venda voluptas dolore arciusa cum facculles dolesed quiatempor sa quae occaest inullectatur magnamusda solume nostibus qui tempore molloreri voluptate nias ped ut voloria sequide et ilique volest lia vitiam aut hario iligentectia commo eate nusapit.</p>
                </Fade>
              </div>
              <div className="normal">
                <div className="card" id="facts-card">
                  <h4>Quick Facts</h4>
                  <hr />
                  <p id="date">5 January 2020</p>
                  <div id="info">
                  <p id="author">BY GODIS BLASPHEMY</p>
                  <p>Class of 2020</p>
                  <p id="byline">I once thought of a funny byline but can't remember</p>
                  </div>
                  <h5>Topics</h5>
                  <button className="button-article">politics</button>
                  <button className="button-article">smarticle</button>
                  <button className="button-article">springtime</button>
                  <button className="button-article">particles</button>
                  <button className="button-article">head-to-head</button>
                  <button className="button-article">satire</button>
                </div>
                <div className="card">
                  <h4>Share</h4>
                </div>
              </div>
            </div>
          <Footer />
        </div>
      )
  }

}
