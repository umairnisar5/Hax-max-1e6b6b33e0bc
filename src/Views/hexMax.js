import "../css/css-main.css";
import "../css/css-playingcards.css";
import gfx4H1A from "../images/gfx4H1A.png";
import JKdF5k1 from "../images/JKdF5k1.png";
import ZySDR04 from "../images/ZySDR04.png";
import Wo03hni from "../images/Wo03hni.png";
import GwZAQT from "../images/0GwZAQT.png";
import UV7Z4Wa from "../images/UV7Z4Wa.png";
import GfY2Pft from "../images/GfY2Pft.png";
import LoLAiSK from "../images/LoLAiSK.png";
import fuNkwoC from "../images/fuNkwoC.png";
import o0vkjR from "../images/7o0vkjR.png";
import flags from "../images/flags-blank.png";
import logo from "../images/logo1.jpg";
function Wisedup() {
  return (
    <div className="App">
      {" "}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-xl navbar-dark px-0 pb-sm-0 mb-2 mb-sm-5">
          <a className="navbar-brand position-relative" href="#">
            {console.log(process.env.PUBLIC_URL, "public url")}
            <img src={logo} style={{ height: "60px" }} />
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="tewkenaire.html">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle font-weight-bold"
                  style={{ color: "#FFFF01" }}
                  data-toggle="dropdown"
                  href="#"
                >
                  TEWKEN <span className="caret"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown dropright">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      EXCHANGE
                    </a>
                    <div className="dropdown-menu" style={{ top: "-9px" }}>
                      <a
                        className="dropdown-item"
                        href="https://justswap.io/?lang=en-US#/home?tokenAddress=TBhxyECmAg3uCqqmEHQvGJbrgj9cn1yMZ1&amp;type=swap"
                        target="_blank"
                      >
                        JUSTSWAP
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://m.poloniex.org/#/marketItem/408"
                        target="_blank"
                      >
                        POLONIDEX
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://swap.oikos.cash/swap/TBhxyECmAg3uCqqmEHQvGJbrgj9cn1yMZ1"
                        target="_blank"
                      >
                        OIKOS
                      </a>
                    </div>
                  </div>
                  <div className="dropdown dropright">
                    <a
                      className="dropdown-item dropdown-toggle font-weight-bold"
                      href="#"
                      data-toggle="dropdown"
                    >
                      FARMING
                    </a>
                    <div className="dropdown-menu" style={{ top: "-9px" }}>
                      <a
                        className="dropdown-item font-weight-bold"
                        href="tewkentrx.html"
                      >
                        TEWKEN/TRX
                      </a>
                    </div>
                  </div>
                  <div className="dropdown dropright">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      GAMES
                    </a>
                    <div className="dropdown-menu" style={{ top: "-9px" }}>
                      <a className="dropdown-item" href="tewkenity.html">
                        TEWKENITY
                      </a>
                    </div>
                  </div>
                  <a className="dropdown-item" href="staking.html">
                    STAKING
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://tronscan.org/#/token20/TBhxyECmAg3uCqqmEHQvGJbrgj9cn1yMZ1"
                    target="_blank"
                  >
                    INFO
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/open?id=1SCEBl0EQKeF1RQAM3sXL5_o37u2k0rin"
                    target="_blank"
                  >
                    WHITEPAPER
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  ETHEREUM <span className="caret"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="stableth.html">
                    STABLE
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  TRON <span className="caret"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="stable.html">
                    STABLE
                  </a>
                  <a className="dropdown-item" href="crazy.html">
                    CRAZY
                  </a>
                  <a className="dropdown-item" href="infinitew.html">
                    INFINITEW
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  WISE4 <span className="caret"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="hextew.html">
                    HEXTEW
                  </a>
                  <a className="dropdown-item" href="hexrise.html">
                    HEXRISE
                  </a>
                  <a className="dropdown-item" href="Wisedup.html">
                    Wisedup
                  </a>
                  <a className="dropdown-item" href="infinihex.html">
                    INFINIHEX
                  </a>
                  <a
                    className="dropdown-item"
                    href="http://swaphex.com"
                    target="_blank"
                  >
                    GET WISE4
                  </a>
                  <a
                    className="dropdown-item"
                    href="http://etherhex.win/"
                    target="_blank"
                  >
                    WISE4 AA LOBBY
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://changelly.com/?ref_id=0v1ibqf8clxjvqub"
                  target="_blank"
                >
                  GET CRYPTO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://wiseduptats.com"
                  target="_blank"
                >
                  STATS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  MISC <span className="caret"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    className="dropdown-item"
                    href="faucet.html"
                    target="_blank"
                  >
                    FAUCET(OLD)
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  SOCIALS <span className="caret"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    className="dropdown-item"
                    href="https://t.me/wisedup"
                    target="_blank"
                  >
                    TELEGRAM
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://twitter.com/wisedup?lang=en"
                    target="_blank"
                  >
                    TWITTER
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row mb-2 mb-sm-5 wallet_balance_div">
          <div className="col-md-6 text-left">
            <p>
              Wallet:
              <span className="notranslate" translate="no" id="wallet">
                Please log into Metamask!
              </span>
              &nbsp;&nbsp;&nbsp;Balance: <span id="balance">0</span> WISE4
            </p>
          </div>
          <div className="col-md-6 text-right" id="ethWallet">
            <p>
              Network: <span id="network">Detecting...</span>
            </p>
          </div>
          <div className="wallet_button">
            <button>Connect To Wallet</button>
          </div>
        </div>
        <div className="row accord no-gutters mb-5">
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={GwZAQT} height="70" className="icon_stat" />
            <p className="icon_title mb-2">In Rate</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="buyPrice"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={Wo03hni} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Out Rate</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="sellPrice"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={ZySDR04} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total Balance</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalBalance"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={JKdF5k1} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Stake Balance</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="stakeBalance"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={UV7Z4Wa} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Future Rewards</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="futureRewards"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={GfY2Pft} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total Player</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalPlayer"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              Address
            </p>
          </div>
        </div>
        <div className="row accord no-gutters mb-5">
          <div id="runningSince" className="col-12 text-center">
            <div className="card mb-3">
              <div className="lead text-white">
                Running for
                <span className="notranslate" translate="no" id="time">
                  <span className="months">-</span> months
                  <span className="days">-</span> days
                  <span className="hours">-</span> hours
                  <span className="minutes">-</span> minutes
                  <span className="seconds">-</span> seconds
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center pr-lg-2">
            <div id="leftCol1" className="card mb-5 mb-lg-3">
              <div className="card_text text-justify">
                <h1 className="title text-center">MY VAULT</h1>
              </div>
              <div className="form_text mx-3">
                Total (WISE4):
                <span className="notranslate" translate="no" id="myTokenHEX4">
                  0.00
                </span>
                <br />
                Total (WISE4):
                <span className="notranslate" translate="no" id="myTokenHEX">
                  0.00
                </span>
                <br />
                <div className="border-top my-3"></div>
                Staked (WISE4):
                <span className="notranslate" translate="no" id="stakedHEX4">
                  0.00
                </span>
                <br />
                Staked (WISE4):
                <span className="notranslate" translate="no" id="stakedHEX">
                  0.00
                </span>
                <br />
                <div className="border-top my-3"></div>
                Unstaked (WISE4):
                <span className="notranslate" translate="no" id="unstakedHEX4">
                  0.00
                </span>
                <br />
                Unstaked (WISE4):
                <span className="notranslate" translate="no" id="unstakedHEX">
                  0.00
                </span>
                <div className="border-top my-3"></div>
                <div className="row no-gutters">
                  <div className="col-xl-4 text-xl-left text-center form_text">
                    Reward
                  </div>
                  <div className="lead col-xl-8 text-xl-right text-center form_text">
                    <span
                      className="notranslate"
                      translate="no"
                      id="myDividends"
                    >
                      - WISE4
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <button id="reinvest" className="small_button">
                  Roll
                </button>
                <button id="withdraw" className="small_button">
                  Withdraw
                </button>
              </div>
            </div>
            <div id="leftCol2" className="card mb-5 mb-lg-0">
              <div className="card_text text-justify">
                <h1 className="title text-center">TRANSFER</h1>
              </div>
              <div className="form_text mx-3 mb-3">
                <input
                  id="transferAddress"
                  type="string"
                  className="form-control mb-3"
                  placeholder="Enter wallet address"
                />
                <input
                  id="transferInput"
                  type="number"
                  min="0"
                  step="0.01"
                  className="form-control mb-3"
                  placeholder="Enter unstaked WISE4 amount"
                />
                <button id="transferTokens" className="button">
                  Transfer
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-3 text-center px-lg-2">
            <div className="card">
              <div
                id="countdown"
                className="position-absolute text-center text-white"
                style={{
                  top: "50%",
                  left: "50%",
                  marginLeft: "-113.0685px",
                  marginTop: "-76.3px",
                  zIndex: "9999",
                  display: "none",
                }}
              >
                <h1 className="mb-5 text-center card_text">Launching in</h1>
                <h3 className="notranslate" translate="no" id="time">
                  <span className="days"></span>d{" "}
                  <span className="hours"></span>h
                  <span className="minutes"></span>m{" "}
                  <span className="seconds"></span>s
                </h3>
              </div>
              <div className="card_text text-justify">
                <h1 className="title text-center">BLOCKCHAIN</h1>
              </div>
              <div className="form_text mx-3 mb-3">
                <div id="middleCol" className="transaction-history hexfour">
                  <table
                    id="transaction-history-table"
                    className="table table-dark table-striped"
                    style={{ borderStyle: "hidden", background: "#232027" }}
                  >
                    <thead>
                      <tr>
                        <th
                          id="time-stamp"
                          className="text-muted d-none"
                          scope="col"
                        >
                          TimeStamp
                        </th>
                        <th className="text-muted" scope="col">
                          Time
                        </th>
                        <th
                          className="text-muted d-none d-sm-table-cell"
                          scope="col"
                        >
                          Type
                        </th>
                        <th className="text-muted" scope="col">
                          Player
                        </th>
                        <th className="text-muted" scope="col">
                          Wise
                        </th>
                      </tr>
                    </thead>
                    <tbody id="exchange" style={{ opacity: "0.02" }}>
                      <tr id="loading" style={{ display: "none" }}>
                        <td>0</td>
                        <td>Loading ...</td>
                        <td>Loading ...</td>
                        <td>Loading ...</td>
                        <td>Loading ...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-0 text-center pl-lg-2">
            <div className="card mb-5 mb-lg-3">
              <div className="card_text text-justify">
                <i
                  className="fa fa-question-circle float-right"
                  data-toggle="modal"
                  data-target="#buyInfo"
                ></i>
                <h1 className="title text-center">IN</h1>
              </div>
              <div className="form_text mx-3">
                <input
                  id="buyInput"
                  type="number"
                  min="1"
                  className="form-control mb-3"
                  placeholder="Enter amount (WISE4)"
                  //   onkeyup="calculateTokensReceived();"
                  //   onchange="calculateTokensReceived();"
                />
                &asymp;
                <span className="notranslate" translate="no" id="buyEstimate">
                  0.00 WISE4
                </span>
              </div>
              <div className="mb-3">
                <button id="approveTokens" className="small_button">
                  Approve
                </button>
                <button id="buyTokens" className="small_button">
                  Enter
                </button>
              </div>
            </div>
            <div className="card mb-5 mb-lg-3">
              <div className="card_text text-justify">
                <h1 className="title text-center">OUT</h1>
              </div>
              <div className="form_text mx-3 mb-3">
                <input
                  id="sellInput"
                  type="number"
                  min="0"
                  step="0.1"
                  className="form-control mb-3"
                  placeholder="Enter unstaked WISE4 amount"
                  //   onkeyup="calculateHexReceived();"
                  //   onchange="calculateHexReceived();"
                />
                &asymp;
                <span className="notranslate" translate="no" id="sellEstimate">
                  0.00 WISE4
                </span>
                <br />
                <button id="sellTokens" className="button">
                  Exit
                </button>
              </div>
            </div>
            <div className="card">
              <div
                className="text-center"
                style={{ marginBottom: "1.66rem", margiTop: "1.66rem" }}
              >
                <a
                  className="title text-center"
                  style={{ fontSize: "22px" }}
                  target="_blank"
                  href="https://bloxy.info/token_holders/0xd52dca990cfc3760e0cb0a60d96be0da43febf19"
                >
                  LEADERBOARD
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="title">STAKING</h1>
        </div>
        <div className="row accord no-gutters mb-5">
          <div className="col-12">
            <div className="card pl-3">
              <div className="row no-gutters">
                <div className="col-md-3 mt-3 pr-3">
                  <input
                    className="form-control"
                    id="stakeInput"
                    type="number"
                    min="1"
                    placeholder="Enter unstaked WISE4 amount"
                    // onkeyup="calculateStakeStartBonusHearts();"
                  />
                </div>

                <div className="col-md-3 mt-3 pr-3">
                  <input
                    className="form-control"
                    id="dayInput"
                    type="number"
                    min="1"
                    max="5555"
                    placeholder="Enter days (max 5,555)"
                    // onkeyup="calculateStakeStartBonusHearts();"
                    // onchange="calculateStakeStartBonusHearts();"
                  />
                </div>

                <div className="col-md-3 mt-3 pr-3">
                  <input
                    className="form-control"
                    id="effectiveAmount"
                    placeholder="Staking Power"
                    disabled
                  />
                </div>

                <div className="col-md-3 my-1 text-right">
                  <button id="stakeTokens" className="small_button">
                    Stake
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="title" style={{ fontSize: "22px" }}>
            ACTIVE STAKES
          </h2>
        </div>
        <div className="accord mb-5">
          <div className="card mb-2">
            <div className="px-3 text-center">
              Notice : Remember to unstake when your progress reaches a 100%
            </div>
          </div>
          <table
            id="stakeActiveTable"
            className="dash-table"
            data-toggle="table"
            data-unique-id="id"
            data-pagination="true"
            data-page-size="5"
            data-pagination-h-align="left"
            data-pagination-detail-h-align="right"
            style={{ borderTopStyle: "hidden" }}
          >
            <thead>
              <tr>
                <th className="d-none" data-field="id"></th>
                <th
                  data-field="start"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Start
                </th>
                <th
                  data-field="end"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;End
                </th>
                <th
                  data-field="progress"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Progress
                </th>
                <th
                  data-field="principal"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Principal
                </th>
                <th
                  data-field="shares"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Shares
                </th>
                <th
                  data-field="bpd"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;BigPayDay
                </th>
                <th
                  data-field="interest"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Extra Tokens
                </th>
                <th
                  data-field="currentvalue"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Current Value
                </th>
                <th data-field="button" data-cell-style="cellStyle"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="text-center">
          <h2 className="title" style={{ fontSize: "22px" }}>
            STAKE HISTORY
          </h2>
        </div>
        <div className="accord mb-5">
          <table
            id="stakeHistoryTable"
            className="dash-table"
            data-toggle="table"
            data-unique-id="id"
            data-pagination="true"
            data-page-size="5"
            data-pagination-h-align="left"
            data-pagination-detail-h-align="right"
            style={{ borderTopStyle: "hidden" }}
          >
            <thead>
              <tr>
                <th className="d-none" data-field="id"></th>
                <th className="d-none" data-field="amount"></th>
                <th
                  data-field="start"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Start
                </th>
                <th
                  data-field="end"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;End
                </th>
                <th
                  data-field="progress"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Progress
                </th>
                <th
                  data-field="principal"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Principal
                </th>
                <th
                  data-field="shares"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Shares
                </th>

                <th
                  data-field="estimatedPayout"
                  data-sortable="true"
                  data-sorter="numberSorter"
                >
                  &nbsp;&nbsp;Net In/Out
                </th>
                <th data-field="button" data-cell-style="cellStyle"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="text-center mb-5">
          <h1 className="title">MY STATS</h1>
        </div>
        <div className="row accord no-gutters mb-5">
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={o0vkjR} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total In</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalMyDeposit"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={LoLAiSK} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total Out</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalMyWithdrawal"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={fuNkwoC} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total Ref Rewards</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalMyReferralReward"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={GfY2Pft} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total Referred</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalMyReferralCount"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              Players
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={o0vkjR} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Total Staked</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="totalMyStaked"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-2 text-center stats">
            <img src={LoLAiSK} height="70" className="icon_stat" />
            <p className="icon_title mb-2">Staking Net In/Out</p>
            <span
              className="icon_number notranslate"
              translate="no"
              id="stakedNetProfitLoss"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </span>
            <p translate="no" className="small text-muted notranslate">
              WISE4
            </p>
          </div>
        </div>
        <div className="text-center mb-3">
          <h1 className="title">INFLATION CHART</h1>
        </div>
        <div className="row accord no-gutters mb-5">
          <div className="col-12 text-center mb-3">
            <button id="yearChart" className="small_button">
              1 year
            </button>
            <button id="monthChart" className="small_button">
              1 month
            </button>
            <button id="weekChart" className="small_button">
              1 week
            </button>
            <button id="dayChart" className="small_button">
              1 day
            </button>
            <button id="twelveChart" className="small_button">
              12 hour
            </button>
            <button id="sixChart" className="small_button">
              6 hour
            </button>
          </div>
          <div className="col-12">
            <canvas id="priceChart"></canvas>
          </div>
        </div>
        <div className="text-center mb-4">
          <h1 className="title">TUTORIAL</h1>
        </div>
        <div className="row accord no-gutters mb-5">
          <div className="col-12">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/YVgfHZMFFFQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div id="faq">
          <div className="text-center mb-4">
            <h1 className="title">FAQ</h1>
          </div>
          <div className="accord mb-5" id="accordion">
            <div className="card mb-1">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <a
                    className="text-white collapsed"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    How to use this platform?
                  </a>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  To use this platform on PC,
                  <a
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                    target="_blank"
                  >
                    Metamask
                  </a>
                  extension must be installed on your Google Chrome browser. If
                  you are using smartphone
                  <a
                    href="https://play.google.com/store/apps/details?id=io.metamask&amp;hl=en"
                    target="_blank"
                  >
                    Metamask[Android]
                  </a>
                  or
                  <a
                    href="http://testflight.apple.com/join/4cYoRF4M"
                    target="_blank"
                  >
                    Metamask[IOS]
                  </a>
                  is suitable. Put some WISE4 in your wallet and begin!
                  <br />
                  <b>Tip:</b>
                  <br />
                  When interacting with smart contracts, it's always better to
                  have some ETH for gas. The gas will be consumed when
                  triggering smart contract's functions
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <a
                    className="text-white collapsed"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    How does the game work?
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  WISE4 is a dividend and price inflationary token
                  <br />
                  When you enter or exit, 10% is deducted from your deposit and
                  allocated to the inflation and reward pool
                  <br />
                  3rd party games will provide external source of revenue to the
                  contract
                  <br />
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <a
                    className="text-white collapsed"
                    data-toggle="collapse"
                    href="#collapseThree"
                  >
                    How does the staking work?
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Staking Power (also known as Effective WISE4) determines how
                  many shares you get for your wise stake
                  <br />
                  When you stake your WISE4 token, you are staking to the
                  original Wise contract endorsed by Richard Heart
                  <br />
                  While staked, your staked WISE4 tokens still collects rewards
                  from the exchange (in real time)
                  <br />
                  While staked, your staked WISE4 tokens still inflates in value
                  (volatility in exchange and profitable unstakes)
                  <br />
                  While staked, the amount of staked WISE4 tokens will reduce
                  when WISE4 inflates in value (because its adjusted to the
                  amount of WISE4 staked)
                  <br />
                  This means you will gradually have more liquid WISE4 /
                  unstaked WISE4 at your disposal to exit
                  <br />
                  When you unstake, you are bound by the rules set in the
                  original Wise contract (penalties or rewards)
                  <br />
                  When you unstake, only profitable stakes are subjected to the
                  entry fees (not deducted from principal)
                  <br />
                  When you unstake, the price inflation of WISE4 might offset
                  the loss made from early or late unstake
                  <br />
                  You are entitled for BigPayDay which is not shown in the UI
                  <br />
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingRef">
                <h5 className="mb-0">
                  <a
                    className="text-white collapsed"
                    data-toggle="collapse"
                    href="#collapseRef"
                  >
                    What is my referral address?
                  </a>
                </h5>
              </div>
              <div
                id="collapseRef"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <span id="masternode-link">
                    Please purchase 100,000 WISE4 to qualify for masternode
                  </span>
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <a
                    className="text-white collapsed"
                    data-toggle="collapse"
                    href="#collapseFour"
                  >
                    What are the fees?
                  </a>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  10% entry fee (2% price inflation + 6% rewards + 1% to hextew
                  or referral + 1% dev fee)
                  <br />
                  10% exit fee (2% price inflation + 6% rewards + 1% to hexrise
                  + 1% dev fee)
                  <br />
                  1% transfer fee
                  <br />
                </div>
              </div>
            </div>
            <div className="card mb-1">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <a
                    className="text-white collapsed"
                    data-toggle="collapse"
                    href="#collapseFive"
                  >
                    What is the contract address?
                  </a>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <a
                    className="text-white"
                    href="https://etherscan.io/address/0xd52dca990CFC3760e0Cb0A60D96BE0da43fEbf19"
                    target="_blank"
                  >
                    https://etherscan.io/address/0xd52dca990CFC3760e0Cb0A60D96BE0da43fEbf19
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="row no-gutters" id="footer_row">
            <div className="col-6 text-left">
              <span>2019 &copy; wisedup</span>
            </div>
            <div className="col-6 text-right">
              <span className="social-link">
                <span
                  className="position-relative"
                  style={{ top: "10px", right: "10px" }}
                >
                  <a
                    href="#"
                    // onclick="doGTranslate('en|zh-CN');return false;"
                    title="Chinese (Simplified)"
                    className="gflag nturl"
                    style={{ backgroundPosition: "-300px -0px" }}
                  >
                    <img
                      src={flags}
                      height="24"
                      width="24"
                      alt="Chinese (Simplified)"
                    />
                  </a>
                  <a
                    href="#"
                    // onclick="doGTranslate('en|en');return false;"
                    title="English"
                    className="gflag nturl"
                    style={{ backgroundPosition: "-0px -0px" }}
                  >
                    <img src={flags} height="24" width="24" alt="English" />
                  </a>
                  <a
                    href="#"
                    // onclick="doGTranslate('en|ko');return false;"
                    title="Korean"
                    className="gflag nturl"
                    style={{ backgroundPosition: "-0px -200px" }}
                  >
                    <img src={flags} height="24" width="24" alt="Korean" />
                  </a>
                  <a
                    href="#"
                    // onclick="doGTranslate('en|vi');return false;"
                    title="Vietnamese"
                    className="gflag nturl"
                    style={{ backgroundPosition: "-200px -400px" }}
                  >
                    <img src={flags} height="24" width="24" alt="Vietnamese" />
                  </a>
                </span>
                <a
                  href="https://t.me/wisedup"
                  target="_blank"
                  style={{ marginRight: "20px" }}
                >
                  <i className="fab fa-telegram" style={{ color: "#ffff" }}></i>
                </a>
                <a href="https://twitter.com/wisedup?lang=en" target="_blank">
                  <i className="fab fa-twitter" style={{ color: "#ffff" }}></i>
                </a>
              </span>
            </div>
            <div
              className="col-12 small text-justify text-muted"
              style={{ lineHeight: "1.5" }}
            >
              This application has been made for entertainment purposes and
              should be considered as such. No guarantees or warranties are
              given. WisedUp is an entertainment platform, not an investment
              platform.
            </div>
          </div>
        </div>
        <div id="google_translate_element2"></div>
      </div>
      <div
        className="modal fade"
        id="endStakeModal"
        tabIndex="-1"
        role="dialog"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content" style={{ backgroundColor: "#232027" }}>
            <div className="modal-header">
              <h2 className="modal-title" id="endStakeModalLabel">
                Confirm End Stake
              </h2>
              <button
                id="secClose"
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ color: "white" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <span id="stakeMessage" className="lead"></span>
              <br />
            </div>

            <div className="modal-footer p-0">
              <button
                id="mainClose"
                type="button"
                className="button"
                data-dismiss="modal"
              >
                Close
              </button>
              <button id="endStakeConfirm" type="button" className="button">
                End Stake
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="buyInfo" tabIndex="-1" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content" style={{ backgroundColor: "#232027" }}>
            <div className="modal-header">
              <h2 className="modal-title" id="buyInfoModalLabel">
                How to enter?
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ color: "white" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <span className="lead">
                1) You have to approve 2 transactions (Approve and Enter)
                <br />
                2) First key in the amount of WISE4 you want to deposit. Then
                click Approve
                <br />
                3) Once the transaction has been mined, the Enter button will be
                enabled
                <br />
                4) Key in the amount you just approved. Then click Enter
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wisedup;
