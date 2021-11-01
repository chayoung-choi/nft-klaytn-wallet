import React, {useEffect, useState} from 'react'
import {walletCreateAccount} from "../kas/Kas";
import {Card, Col, Container, Row} from "react-bootstrap";

const Account = () => {

  const [account, setAccount] = useState(null)

  useEffect(() => {
    const init = async () => {
      try {
        const result = await walletCreateAccount()
        console.log(result)
        // setAccount(result)
      } catch (e) {
        console.error(e)
      }

    }
    init()
  }, [])

  return (
		<>
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      {/*<Container>*/}
      {/*  <h3>계정 생성</h3>*/}

      {/*  <Card>*/}
      {/*    <CardContent>{account}</CardContent>*/}
      {/*  </Card>*/}
      {/*  <Card>*/}
      {/*    <CardContent>{account}</CardContent>*/}
      {/*  </Card>*/}
      {/*  <Card>*/}
      {/*    <CardContent>{account}</CardContent>*/}
      {/*  </Card>*/}
      {/*  <Card>*/}
      {/*    <CardContent>{account}</CardContent>*/}
      {/*  </Card>*/}
      {/*  <Card>*/}
      {/*    <CardContent>{account}</CardContent>*/}
      {/*  </Card>*/}

      {/*</Container>*/}
		</>
	)
}
export default Account
