import React, {useEffect, useState} from 'react'
import {walletCreateAccount} from '../kas/Kas'
import {Button, Card, Col, ListGroup, Row} from 'react-bootstrap'
import {walletState} from '../recoil/recoilWallet'
import {useRecoilState} from 'recoil'
import {formatDate} from '../utils/Utils'

const Account = () => {
  const [account, setAccount] = useState(null)
  const [rcWallet, setRcWallet] = useRecoilState(walletState)

  useEffect(() => {
    // const init = async () => {
    //   try {
    //     const result = await walletCreateAccount()
    //     console.log(result)
    //     // setAccount(result)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
    // init()
  }, [])

  const createAccount = async () => {
    const result = await walletCreateAccount()
    console.log('[createAccount]', result)
    setRcWallet(rcWallet.concat(result))
  }

  return (
    <>
      <Row>
        <Col sm={12}>
          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>Klaytn 지갑 생성하기</Card.Title>
              <Button variant='primary' onClick={createAccount}>
                생성
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {rcWallet.map((item, index) => (
          <Col sm={6} key={index}>
            <Card className='mb-3'>
              <Card.Body>
                <Card.Title>{item.address}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>public key : {formatDate(item.publicKey)}</Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <ListGroup>
                  <ListGroup.Item className='bg-light'>
                    <small className='text-muted'>생성일 : {formatDate(item.createdAt)}</small>
                  </ListGroup.Item>
                  <ListGroup.Item className='bg-light'>
                    <small className='text-muted'>수정일 : {formatDate(item.updatedAt)}</small>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
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
