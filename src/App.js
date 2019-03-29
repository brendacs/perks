import React, { Component } from 'react';
import randomColor from 'randomcolor';
import CompanyCard from './components/CompanyCard/CompanyCard';
import Sidebar from './components/Sidebar/Sidebar';
import { AppWrapper, BodyContainer, Container, Header, Heading, SubHeading } from './styles';
import Guide from './components/Guide/Guide';
import Alert from './components/Alert/Alert';
import perks from './constants/perks.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: new Set([0, 1, 2]),
      alert: "",
      alertType: "",
      showAlert: false
    }
  }

  closeCard = (idx) => {
    let newCards = new Set(this.state.cards);
    newCards.delete(idx);
    this.setState({ cards: newCards });
  }

  addCard = (idx) => {
    if (this.state.cards.has(idx)) {
      this.setState({
        alert: "This company has already been selected",
        alertType: "Error",
        showAlert: true
      });
      return;
    }

    let newCards = new Set(this.state.cards);

    if (newCards.size < 3) {
      newCards.add(idx);
      this.setState({ cards: newCards });
      this.setState({ alert: "", alertType: "" });
    } else {
      this.setState({
        alert: "The maximum number of companies is 3",
        alertType: "Warning",
        showAlert: true
      });
    }
  }

  closeAlert = () => {
    this.setState({ showAlert: false });
  }

  render() {
    const companyList = Object.keys(perks);

    return (
      <AppWrapper>
        <Alert
          text={this.state.alert}
          type={this.state.alertType}
          closeAlert={this.closeAlert}
          showAlert={this.state.showAlert}
        />
        <Guide />
        <Header>
          <Heading>
            <span style={{color: "#1d9bfb"}}>TechPerks</span>
            .Guide
          </Heading>
          <SubHeading>Live Your Best Life&trade;</SubHeading>
        </Header>
        <BodyContainer>
          <Container>
            {
              companyList.map((item, idx) => {
                return (
                  <CompanyCard
                    company={item}
                    visible={this.state.cards.has(idx)}
                    key={idx}
                    closeCard={() => this.closeCard(idx)}
                    cards={this.state.cards}
                  />
                );
              })
            }
          </Container>
          <Sidebar numCards={this.state.cards.size} addCard={this.addCard} />
        </BodyContainer>
      </AppWrapper>
    );
  }
}

export default App;
