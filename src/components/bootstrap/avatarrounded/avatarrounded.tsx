import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../commondata/commonimages';
import { Avatarlist1, Badges1, Simpleavatar1, avatarinitials, avatarsizes1, radiuses } from '../../../commondata/commondata';

interface AvatarRoundedProps { }

const AvatarRounded: FC<AvatarRoundedProps> = () => (
  <Fragment>
    <PageHeader titles="Avatar-Rounded" active="Avatar-Rounded" items={['Componets']} /> 
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Simple Round avatar</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes<code className="highlighter-rouge">.avatar</code> in <code className="highlighter-rouge">.brround</code>.</p>
              <div className="example">
                <div className="avatar-list">
                {Simpleavatar1.map((simpleavatar1) => (
                  <img  key={Math.random()} className="avatar brround cover-image" alt='user1' src={simpleavatar1.src1} />
                ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatars list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-list </code> in <code className="highlighter-rouge">.brround</code> and <code className="highlighter-rouge">.avatar-list-stacked</code>.</p>
              <div className="example">
                <div className="avatar-list avatar-list-stacked">
                {Avatarlist1.map((avatarlist1) => (
                  <img key={Math.random()} className="avatar brround cover-image" alt='user21' src={avatarlist1.src1} />
                  ))}
                  <span className="avatar brround bg-primary">+8</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar with icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-icons</code> .</p>
              <div className="example">
                <div className="avatar-list">

                {radiuses.map((radius)=>(
                  <div className="avatar brround avatar-xl  cover-image" key={Math.random()}>
                    <img className="brround cover-image" alt='user21' src={radius.src1} />
                    <span className={`badge rounded-pill avatar-icons bg-${radius.color}`}><i className={`${radius.icon} fs-12`}></i></span>
                  </div>
                   ))}

                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                            , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
              <div className="example">
                <div className="avatar-list">
                {avatarsizes1.map((avatarsize1) => (
                  <img key={Math.random()} className={`avatar ${avatarsize1.class} brround cover-image`} alt='user4' src={avatarsize1.src1} />
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar status</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-status</code> .</p>
              <div className="example">
                <div className="avatar-list avatarstatus">
                  <img className="avatar brround cover-image" alt='user19' src={Imagesdata("users19")} />

                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user15' src={Imagesdata("users15")} />
                    <span className="avatar-status bg-secondary"></span>
                  </div>
                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user20' src={Imagesdata("users20")} />
                    <span className="avatar-status bg-red"></span>
                  </div>

                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user11' src={Imagesdata("users11")} />
                    <span className="avatar-status bg-green"></span>
                  </div>

                  <div className="avatar brround cover-image" >
                    <img className=" brround cover-image" alt='user17' src={Imagesdata("users17")} />
                    <span className="avatar-status bg-yellow"></span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>RoundAvatar with Badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-badges</code> .</p>
              <div className="example">
                <div className="avatar-list">
                {Badges1.map((Badge1) => (
                  <div className=" avatar avatar-md brround cover-image" key={Math.random()}>
                    <img className=" brround cover-image" alt='user5' src={Badge1.src1} />
                    <span className={`badge rounded-pill avatar-badges bg-${Badge1.color} fs-10`}>{Badge1.data}</span>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Avatar initials with colors</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                                , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="avatar-list">
                {avatarinitials.map((avatarinitial) => (
                  <span key={Math.random()} className={`avatar ${avatarinitial.className} brround bg-${avatarinitial.color}`}>{avatarinitial.class}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
export default AvatarRounded;
