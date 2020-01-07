// eslint-disable react/jsx-no-bind
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VizSensor from 'react-visibility-sensor';

const PercentageBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const BarContainer = styled.div`
  background-color: rgba(255, 255, 255, .05);
  width: 800px;
  margin-left: 12px;
  margin-right: 12px;
  height: 50px;
  @media only screen and (max-width: 768px) {
    height: 25px
  }
`;

const Bar = styled.div`
  background-color: #FFFFFF;
  opacity: .25;
  width: ${(props) => props.percentage ? `${props.percentage}%` : '100%'};
  height: 50px;
  @media only screen and (max-width: 768px) {
    height: 25px
  }
`;

const Label = styled.h4`
  font-weight: 300;
  color: #ffffff;
  position: absolute;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

class PercentageBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 1
        };

        this.animateIn = this.animateIn.bind(this);
    }

    animateIn() {
        const { percentage } = this.props;

        this.interval = setInterval(() => {
            if (this.state.progress >= percentage) {
                clearInterval(this.interval);
            } else {
                this.setState({
                    progress: this.state.progress + 1
                });
            }
        }, 20);
    }

    render() {
        const { progress } = this.state;
        const { label } = this.props;

        return (
            <VizSensor onChange={
                (isVisible) => {
                    isVisible && this.animateIn();
                }
            }>
                <PercentageBarContainer>
                    <Label>{label}</Label>
                    <BarContainer>
                        <Bar percentage={ progress } />
                    </BarContainer>
                </PercentageBarContainer>
            </VizSensor>
        );
    }
}

PercentageBar.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    animate: PropTypes.bool
};

export default PercentageBar;
