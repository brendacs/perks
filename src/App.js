import React, { Component } from 'react';
import CompanyCard from './components/CompanyCard/CompanyCard';
import EmptyCard from './components/EmptyCard/EmptyCard';
import Sidebar from './components/Sidebar/Sidebar';
import Guide from './components/Guide/Guide';
import Alert from './components/Alert/Alert';
import {
  AppWrapper,
  BodyContainer,
  Container,
  Header,
  Heading,
  Link,
  Text
} from './styles';
import perks from './constants/perks.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [4, 3, 1],
      perks: -1,
      alert: "",
      alertType: "",
      showAlert: false
    }
  }

  closeCard = (idx) => {
    let newCards = [...this.state.cards];
    newCards.splice(idx, 1);
    this.setState({ cards: newCards });
  }

  addCard = (idx) => {
    if (this.state.cards.indexOf(idx) !== -1) {
      this.setState({
        alert: "This company has already been selected",
        alertType: "Error",
        showAlert: true
      });
      return;
    }

    let newCards = [...this.state.cards];

    if (newCards.length < 3) {
      newCards.push(idx);
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

  comparePerk = (num) => {
    this.setState({ perks: num });
  }

  render() {
    const companyList = Object.keys(perks).sort();
    const emptyCards = [1, 2, 3];

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
            <span style={{color: "#1d9bfb"}}>CompanyPerks</span>
            .Guide
          </Heading>
          <Text>A redesign & reconceptualization of&nbsp;
            <Link href="http://perks.guide" target="_blank">perks.guide</Link>
          </Text>
        </Header>
        <BodyContainer>
          <Container>
            {
              this.state.cards.map((item, idx) => {
                return (
                  <CompanyCard
                    company={companyList[item]}
                    closeCard={() => this.closeCard(idx)}
                    perks={this.state.perks}
                    comparePerk={this.comparePerk}
                  />
                );
              })
            }
            {
              emptyCards.map((item, idx) => {
                return (
                  <EmptyCard
                    title="Add Company"
                    visible={this.state.cards.length < item}
                    addCard={this.addCard}
                  />
                );
              })
            }
          </Container>
          <Sidebar
            numCards={this.state.cards.size}
            addCard={this.addCard}
            comparePerk={this.comparePerk}
          />
        </BodyContainer>
      </AppWrapper>
    );
  }
}

export default App;
