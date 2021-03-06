import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { ClassNames } from '@babel/core'
import { H2, P, H3, A } from '../../../Components/Text/Text'
import ColoredDiv from '../../../Components/ColoredDiv/ColoredDiv'
import Hr, { HrBottomOnly, HrNoLineOneWayOnly } from '../../../Components/Hr/Hr'
import BackgroundImg from './BackgroundImg/BackgroundImg'
import {
  getDesignImagesArrayState,
  getDesignImagePreviewState,
  getPortfolioArrayState,
  getPortfolioPreviewState,
  getSearchEngineArrayState,
  getSearchEngineInputState,
} from '../../../redux/reducers'
import MacBook from '../../../Modules/MacBook/MacBook'
import Iframe from '../../../Components/IFrame/Iframe'
import PortfolioImg from './PortfolioImg/PortfolioImg'
import { BackgroundImg as BGI } from '../../../Components/Images/Images'
import Create from './Create/Create'
import SpinningArrows from './SpinningArrows/SpinningArrows'
import SearchEngine from './SearchEngine/SearchEngine'
import { phoneSurrondToScreenOnlySwitch } from '../../../Modules/IPhoneX/IPhoneXComponents/IPhoneXComponents'
import { laptopPhoneSwitchScreenWidth } from '../../../Modules/MacBook/MacBookComponents/MacBookComponents'

const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-height: 80vh;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

const OrderedDiv = styled('div')`
  order: ${(props) => props.order || 0};
  @media (max-width: 992px) {
    order: ${(props) => props.mdOrder || props.order || 0};
  }
`

const SmallImgContainer = styled('div')`
  border: solid 2px ${(props) => props.theme.color.primary};
  height: 150px;
  padding: 4px;
  margin-right: -1px;
  margin-top: 6vh;
  :hover {
    border-width: 4px;
  }
`

const ImageSelectionRow = styled.div`
  width: 100%;
  cursor: pointer;
`

const H20emMarginTop = styled(H2)`
  margin-top: 0em;
`

const ColouredBoxes = styled(ColoredDiv)`
  padding: 30px 34px;
  text-align: justify;
  background-color: ${(props) => props.theme.color.primary};
  color: #fff;
  margin-top: 6vh;
  margin-bottom: 6vh;
`

const SmallScreenHide = styled.span`
  @media (max-width: 992px) {
    display: none;
  }
`

const SmallScreenShow = styled.span`
  @media (min-width: 992px) {
    display: none;
  }
`

const RestOfSite = ({
  designImages,
  designImagePreview,
  portfolio,
  portfolioPreview,
  searchEngine,
  searchEngineInput,
}) => (
  <div>
    <HrBottomOnly className='col-xs-12' />
    <FlexContainer className='row' id='designSection'>
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              'col-md-4',
              'col-md-offset-1',
              'col-xs-12',
              css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              `
            )}
            style={{ height: '90vh' }}
          >
            <BackgroundImg
              src={designImages[designImagePreview]}
              className='col-xs-12'
            />
            <ImageSelectionRow>
              {designImages.map((image, i) => (
                <SmallImgContainer
                  key={image}
                  className={`col-xs-${Math.ceil(12 / designImages.length)}`}
                >
                  <BackgroundImg
                    src={image}
                    designImages={designImages}
                    id={i}
                    css={css`
                      width: 100%;
                    `}
                  />
                </SmallImgContainer>
              ))}
            </ImageSelectionRow>
          </div>
        )}
      </ClassNames>
      <div className='col-md-5 col-md-offset-1 col-xs-12'>
        <ColouredBoxes>
          <H20emMarginTop style={{ fontFamily: 'Kalam', fontWeight: 'bold' }}>
            Design
          </H20emMarginTop>
          <P>
            No matter how skilled the developer, drawing a web page is faster
            than building it.
          </P>
          <P>
            Being agile and iterative in design during the early stages of a
            project helps get both the customer and developer understanding each
            other. To enable me in this task, I use a wireframing tool.
          </P>
          <P>
            This allows me to create wire-frames like the ones{' '}
            <SmallScreenHide>to the left</SmallScreenHide>
            <SmallScreenShow>above</SmallScreenShow>. They have a deliberately
            hand-drawn style because their purpose is not to be an exact
            representation but a generalisation for greater understanding.
          </P>
          <P>
            I first began using wire-framing as a rapid prototyping tool in a
            previous role as a Product Owner. This aided me in communicating and
            testing designs and became a tool I used every day.
          </P>
          <P>
            If you work with me we would collaboratively design your site and I
            would create interactive wireframes as my first deliverable to
            enable you to get a better feel for the flow of the site. This would
            be an iterative process.
          </P>
        </ColouredBoxes>
      </div>
    </FlexContainer>
    <div className='col-xs-12'>
      <Hr />
    </div>
    <FlexContainer className='' id='createSection'>
      <OrderedDiv className='col-md-4 col-md-offset-1 col-xs-10' order={1}>
        <Create className='col-xs-12' />
      </OrderedDiv>
      <OrderedDiv
        order={0}
        mdOrder={2}
        className='col-md-5 col-md-offset-1 col-xs-12'
      >
        <ColouredBoxes>
          <H20emMarginTop style={{ fontFamily: 'Kalam', fontWeight: 'bold' }}>
            Create
          </H20emMarginTop>
          <P>
            While I {"don't"} have decades of front end web development I do
            have experience in the latest technologies, most of which have only
            existed in the last three or four years, so there are very few
            individuals with more than a year or two of experience.
          </P>
          <P>
            My favoured website building technology is the React framework, this
            was created and maintained by Facebook. The benefits of using this
            technology is that the whole website is built from reusable building
            blocks and while it looks and acts like any other website it is in
            fact a single page enabling lightning fast page transfers and
            updates, such as the ones that reveal aspects of this website.
          </P>
          <P>
            This {"isn't"} the only technology I am familiar with, I have also
            created websites in a more traditional sense or using Wordpress.
          </P>
          <P>
            A good website is not complete without back-end services. I can
            provide you with built-in services for your website such as email
            automation and database integrations.
          </P>
          <P>
            Lastly, the best websites continue to work even when the user is
            offline or has slow internet speeds. These are called Progressive
            Web Apps (PWAs) and utilise the very latest in browser technology to
            ensure the user never sees the {'"You Are Offline"'} screen.
          </P>
          <P>This demonstration is a React website.</P>
        </ColouredBoxes>
      </OrderedDiv>
    </FlexContainer>

    <div className='col-xs-12'>
      <Hr />
    </div>
    <FlexContainer className='row' id='releaseSection'>
      <div className='col-xs-4 col-md-offset-1'>
        <SpinningArrows />
      </div>
      <div className='col-md-5 col-md-offset-1 col-xs-12'>
        <ColouredBoxes>
          <H20emMarginTop style={{ fontFamily: 'Kalam', fontWeight: 'bold' }}>
            Release
          </H20emMarginTop>
          <P>
            Having been a Product Owner in the past, I know how to break down
            and manage software development cycles.
          </P>
          <P>
            Being an enrolled in the AGILE methodology I believe in full
            transparency of progress and I like to release incremental changes
            to give value to my customers as soon as I have created it.
          </P>
          <P>
            In the case of Starmind, if I were to update your website I would
            look to update page by page and by alike Components, such as the
            navigation bar as to maintain consistency across the website.
          </P>
        </ColouredBoxes>
      </div>
    </FlexContainer>
    <div className='col-xs-12'>
      <Hr />
    </div>
    <FlexContainer className='row' id='seoSection'>
      <OrderedDiv mdOrder={2} className='col-md-5 col-md-offset-1 col-xs-12'>
        <ColouredBoxes>
          <H20emMarginTop style={{ fontFamily: 'Kalam', fontWeight: 'bold' }}>
            SEO
          </H20emMarginTop>
          <P>
            The work {"doesn't"} stop when the website goes live, SEO (Search
            Engine Optimisation) is key to bringing business to your site.
          </P>
          <P>
            I have a number of tools I work with regularly to perform checks for
            key SEO indicators both as I create the website and for after the
            site is live. I will also add your website into the Google and Bing
            webmaster tools to ensure that the site gets indexed.
          </P>
          <P>
            Understanding SEO while creating a website is also key. The
            structure of the website and {"it's"} accessibility are key
            indicators that Google is known to look for in creating {"it's"}{' '}
            index. Getting this right the first time by building the site with
            SEO in mind saves time and money over the length of the project.
          </P>
          <P>
            Just as key to this are good analytics, performing tests on what the
            visitors to the site read and interact with allows us to make more
            informed decisions going forward. By utilising the AGILE methodology
            and releasing early and often we would give ourselves the
            opportunity to learn from the visitors themselves instead of
            speculation and best guesses.
          </P>
        </ColouredBoxes>
      </OrderedDiv>
      <OrderedDiv order={1} className='col-md-4 col-md-offset-1 col-xs-12'>
        <SearchEngine no={searchEngineInput}>
          {searchEngine[searchEngineInput]}
        </SearchEngine>
      </OrderedDiv>
    </FlexContainer>
    <div className='col-xs-12'>
      <Hr />
    </div>
    <FlexContainer
      className='row'
      id='portfolioSection'
      style={{ flexDirection: 'column', justifyContent: 'center' }}
    >
      <H2 style={{ fontFamily: 'Kalam' }}>Some of my previous work:</H2>
      <H3 style={{ marginBottom: '6vh' }}>
        <A target='_blank' href={portfolio[portfolioPreview].src}>
          {portfolio[portfolioPreview].src}
        </A>
      </H3>
      <MacBook>
        {portfolio[portfolioPreview].iframe === true ? (
          <ClassNames>
            {({ css }) => (
              <Iframe
                src={portfolio[portfolioPreview].src}
                css={css`
                  min-height: 610px;
                  @media (min-width: ${`${phoneSurrondToScreenOnlySwitch}px`}) {
                    height: 96%;
                  }

                  @media (min-width: ${`${laptopPhoneSwitchScreenWidth}px`}) {
                    min-height: 600px;
                    height: 100%;
                  }
                `}
              />
            )}
          </ClassNames>
        ) : (
          <BGI src={portfolio[portfolioPreview].imgSrc} bgSize='cover' />
        )}
      </MacBook>
      <div className='col-xs-10'>
        <div className={imageSelectionRow}>
          {portfolio.map((example, i) => (
            <SmallImgContainer
              key={example.src}
              className={`col-xs-${Math.ceil(12 / portfolio.length)}`}
            >
              <ClassNames>
                {({ css }) => (
                  <PortfolioImg
                    src={example.imgSrc}
                    designImages={designImages}
                    id={i}
                    css={css`
                      width: 100%;
                    `}
                    bgColor={example.imgBackgroundColor || null}
                  />
                )}
              </ClassNames>
            </SmallImgContainer>
          ))}
        </div>
      </div>
    </FlexContainer>
    <div className='col-xs-12'>
      <HrNoLineOneWayOnly style={{ marginTop: '6vh' }} />
    </div>
  </div>
)

RestOfSite.propTypes = {
  designImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  designImagePreview: PropTypes.number.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
  portfolioPreview: PropTypes.number.isRequired,
  searchEngine: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchEngineInput: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  designImages: getDesignImagesArrayState(state),
  designImagePreview: getDesignImagePreviewState(state),
  portfolio: getPortfolioArrayState(state),
  portfolioPreview: getPortfolioPreviewState(state),
  searchEngine: getSearchEngineArrayState(state),
  searchEngineInput: getSearchEngineInputState(state),
})

export default connect(mapStateToProps)(RestOfSite)
