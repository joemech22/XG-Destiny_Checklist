import React, { Component } from 'react'

class IanData extends Component {
    
        state = {
            loading: true,
            checklist: [],
        }

      async componentDidMount() {
        const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018519221998/Character/2305843009916944635/?components=202";
        const response = await fetch(url, {
            headers: {
                'x-api-key': '2c6c008e57644a4bb63f00504758c443'
            }
        })
        const data = await response.json();
        this.setState({checklist: data.Response.progressions.data.milestones, loading: false});
        console.log(data.Response.progressions.data.milestones)
       
      }
    
      render() {
        const checklist = this.state.checklist
        const vanguardBounties =  checklist["270949152"]
        const vanguardNightfall = checklist["1942283261"]
        const vanguardBurn = checklist["1437935813"]
        const gloryPlaylist = checklist["1368032265"]
        const crucibleMatches = checklist["3312774044"]
        const crucibleBounties = checklist["2594202463"]
        const gambitMatches = checklist["3448738070"]
        const gambitBounties = checklist["3802603984"]
        const dares = checklist["2351139753"]
        const grasp = checklist["973171461"]
        const gunsmith = checklist["3899487295"]
        const salvation = checklist["2712317338"]
        const dsc = checklist["541780856"]
        const vog = checklist["1888320892"]
        const trials = checklist["3007559996"]
        const trialswin = checklist["3842941126"]
        const europa = checklist["2540726600"]
        const wayfinder = checklist["337814587"]
        const shattered = checklist["3789620084"]
        return (
        
            <div className='container'>
                {this.state.loading || !this.state.checklist ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <h1 id='ian'>Ian</h1>
                        <div className='rituals card'>
                        <h2>Ritual Activities</h2>
                        <section className='challenge'>
                        <h2>Vanguard</h2>
                        <div>
                       {vanguardBounties ? (
                           <span className='needToComplete'>
                           <p>Vanguard Bounties: Need to complete</p>
                           </span>
                       ) : (
                           <p>Vanguard Bounties: Completed</p>
                       )}
                       </div>
                       <div>
                       {vanguardNightfall ? (
                           <span className='needToComplete'>
                           <p>Vanguard Nightfall: Need to complete</p>
                           </span>
                       ) : (
                           <p>Vanguard Nightfall: Completed</p>
                       )}
                       </div>
                       <div>
                       {vanguardBurn ? (
                           <span className='needToComplete'>
                           <p>Vanguard Burn Strikes: Need to complete</p>
                           </span>
                       ) : (
                           <p>Vanguard Burn Strikes: Completed</p>
                       )}
                       </div>
                       </section>
                       <section className='challenge'>
                       <h2>Crucible</h2>
                       <div>
                       {gloryPlaylist ? (
                           <span className='needToComplete'>
                           <p>Glory Playlist Wins: Need to complete</p>
                           </span>
                       ) : (
                           <p>Glory Playlist Wins: Completed</p>
                       )}
                       </div>
                       <div>
                       {crucibleMatches ? (
                           <span className='needToComplete'>
                           <p>3 Crucible Matches: Need to complete</p>
                           </span>
                       ) : (
                           <p>3 Crucible Matches: Completed</p>
                       )}
                       </div>
                       <div>
                       {crucibleBounties ? (
                           <span className='needToComplete'>
                           <p>Crucible Bounties: Need to complete</p>
                           </span>
                       ) : (
                           <p>Crucible Bounties: Completed</p>
                       )}
                       </div>
                       </section>
                       <section className='challenge'>
                       <h2>Gambit</h2>           
                       <div>
                       {gambitMatches ? (
                           <span className='needToComplete'>
                           <p>Gambit Matches: Need to complete</p>
                           </span>
                       ) : (
                           <p>Gambit Matches: Completed</p>
                       )}
                       </div>
                       <div>
                       {gambitBounties ? (
                           <span className='needToComplete'>
                           <p>Gambit Bounties: Need to complete</p>
                           </span>
                       ) : (
                           <p>Gambit Bounties: Completed</p>
                       )}
                       </div>
                       </section>
                       <section className='challenge'>
                       <h2>Dares of Eternity</h2>
                       {dares ? (
                           <span className='needToComplete'>
                           <p>1 round of Dares of Eternity: Need to complete</p>
                           </span>
                       ) : (
                           <p>1 round of Dares of Eternity: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                       <h2>Gunsmith Bounties</h2>
                       {gunsmith ? (
                           <span className='needToComplete'>
                           <p>8 Gunsmith Bounties: Need to complete</p>
                           </span>
                       ) : (
                           <p>8 Gunsmith Bounties: Completed</p>
                       )}
                        </section>
                    </div>
                    <div className='dungeons card'>
                    <h2>Dungeons</h2>
                        <section className='challenge'>
                        <h2>Grasp of Avarice</h2>
                       {grasp ? (
                           <span className='needToComplete'>
                           <p>Grasp of Avarice: Need to complete</p>
                           </span>
                       ) : (
                           <p>Grasp of Avarice: Completed</p>
                       )}
                        </section>
                    </div>
                    <div className='raids card'>
                    <h2>Raids</h2>
                        <section className='challenge'>
                        <h2>Vault of Glass</h2>
                       {vog ? (
                           <span className='needToComplete'>
                           <p>Vault of Glass: Need to complete</p>
                           </span>
                       ) : (
                           <p>Vault of Glass: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Deep Stone Crypt</h2>
                       {dsc ? (
                           <span className='needToComplete'>
                           <p>Deep Stone Crypt: Need to complete</p>
                           </span>
                       ) : (
                           <p>Deep Stone Crypt: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Garden of Salvation</h2>
                       {salvation ? (
                           <span className='needToComplete'>
                           <p>Garden of Salvation: Need to complete</p>
                           </span>
                       ) : (
                           <p>Garden of Salvation: Completed</p>
                       )}
                        </section>
                    </div>
                    <div className='trials card'>
                    <h2>Trials of Osiris</h2>
                        <section className='challenge'>
                        <h2>Trials of Osiris Wins</h2>
                       {trialswin ? (
                           <span className='needToComplete'>
                           <p>7 Trials Wins: Need to complete</p>
                           </span>
                       ) : (
                           <p>7 Trials Wins: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Trials of Osiris Round Wins</h2>
                       {trials ? (
                           <span className='needToComplete'>
                           <p>50 Trials of Osiris Round Wins: Need to complete</p>
                           </span>
                       ) : (
                           <p>50 Trials of Osiris Round Wins: Completed</p>
                       )}
                        </section>

                    </div>
                    <div className='seasonal card'>
                    <h2>Seasonal</h2>
                        <section className='challenge'>
                        <h2>Europa Bounties</h2>
                       {europa ? (
                           <span className='needToComplete'>
                           <p>8 Europa Bounties: Need to complete</p>
                           </span>
                       ) : (
                           <p>8 Europa Bounties: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Wayfinder Compass Bounties</h2>
                       {wayfinder ? (
                           <span className='needToComplete'>
                           <p>8 Wayfinder Bounties: Need to complete</p>
                           </span>
                       ) : (
                           <p>8 Wayfinder Bounties: Completed</p>
                       )}
                        </section>
                        <section className='challenge'>
                        <h2>Shattered Realm Champions</h2>
                       {shattered ? (
                           <span className='needToComplete'>
                           <p>4 Shattered Realm Champions: Need to complete</p>
                           </span>
                       ) : (
                           <p>4 Shattered Realm Champions: Completed</p>
                       )}
                        </section>
                    </div>
                    </div>
                )}
            </div>
          )
      }
    }

export default IanData;