import  { FC, Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Imagesdata } from '../../../commondata/commonimages';
import { Avatarlist, Badges, Simpleavatar, avatarinitials, avatarsizes, radiuses } from '../../../commondata/commondata';

interface AvatarRadiusProps { }

const AvatarRadius: FC<AvatarRadiusProps> = () => (
  <Fragment>
    <PageHeader titles="Avatar-Radius" active="Avatar-Radius" items={['Componets']} />
    <Row>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Simple avatar</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes<code className="highlighter-rouge">.avatar</code> in <code className="highlighter-rouge">.bradius</code>.</p>
              <div className="example">
                <div className="avatar-list">
                {Simpleavatar.map((simpleavatar) => (
                  <img  key={Math.random()} className="avatar bradius cover-image" alt='user1' src={simpleavatar.src1} />
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
            <Card.Title>Avatar with Badges</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-badges</code> .</p>
              <div className="example">
                <div className="avatar-list">
                  {Badges.map((Badge) => (
                  <div className=" avatar avatar-md bradius cover-image" key={Math.random()}>
                    <img className=" bradius cover-image" alt='user5' src={Badge.src1} />
                    <span className={`badge rounded-pill avatar-badges bg-${Badge.color} fs-10`}>{Badge.data}</span>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={6} className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>
            <Card.Title>RadiusAvatar with icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-icons</code> .</p>
              <div className="example">
                <div className="avatar-list">
                   {radiuses.map((radius)=>(
                  <div className="avatar avatar-xl bradius cover-image" key={Math.random()}>
                    <img className=" bradius cover-image" alt='user21' src={radius.src1} />
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
            <Card.Title>Radius Avatar initials with colors</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code> , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="avatar-list">
                {avatarinitials.map((avatarinitial) => (
                  <span key={Math.random()} className={`avatar ${avatarinitial.className} bradius bg-${avatarinitial.color}`}>{avatarinitial.class}</span>
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
            <Card.Title>Avatar status</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-status</code> .</p>
              <div className="example">
                <div className="avatar-list avatarstatus">
                  <img className="avatar bradius cover-image" alt='user 21' src={Imagesdata("users21")} />

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user5' src={Imagesdata("users5")} />
                    <span className="avatar-status bg-secondary"></span>
                  </div>

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user9' src={Imagesdata("users9")} />
                    <span className="avatar-status bg-red"></span>
                  </div>

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user6' src={Imagesdata("users6")} />
                    <span className="avatar-status bg-green"></span>
                  </div>

                  <div className="avatar bradius cover-image" >
                    <img className=" bradius cover-image" alt='user7' src={Imagesdata("users7")} />
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
            <Card.Title>Avatars list</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap ">
              <p>Use classes <code className="highlighter-rouge">.avatar-list </code> in <code className="highlighter-rouge">.bradius</code> and <code className="highlighter-rouge">.avatar-list-stacked</code>.</p>
              <div className="example">
                <div className="avatar-list avatar-list-stacked">
                {Avatarlist.map((avatarlist) => (
                  <img key={Math.random()} className="avatar bradius cover-image" alt='user21' src={avatarlist.src1} />
                  ))}
                  <span className="avatar bradius bg-primary">+8</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Avatar size</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code className="highlighter-rouge">.avatar-md</code> , <code className="highlighter-rouge">.avatar-lg</code> , <code className="highlighter-rouge">.avatar-xl</code>                                            , <code className="highlighter-rouge">.avatar-xxl</code> .</p>
              <div className="example">
                <div className="avatar-list">
                  {avatarsizes.map((avatarsize) => (
                  <img key={Math.random()} className={`avatar ${avatarsize.class} bradius cover-image`} alt='user4' src={avatarsize.src1} />
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
export default AvatarRadius;
