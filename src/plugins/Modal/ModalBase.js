import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Clear } from '@material-ui/icons';
import { Fade, Slide, Collapse, Grow, Zoom } from '../transitions';
import Button from '../Button';

const styles = theme => ({
  paper: {
    overflowY: 'hidden',
  },
  title: {
    backgroundColor: 'rgb(16,108,200)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '700',
  },
  icon: {
    color: 'white',
    float: 'right',
    '&:hover': {
      opacity: 0.5,
    },
  },
  contentRoot: {
    paddingTop: theme.spacing.unit * 3,
  },
  actionRoot: {
    margin: 0,
    padding: `${theme.spacing.unit}px  ${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px 0`,
  },
  actionRootBtn: {
    margin: `0 0 0 ${theme.spacing.unit}px`,
  },
  justifyActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

class Modal extends Component {
  handleOK() {
    this.props.onClose;
  }
  transition = props => {
    switch (this.props.animation) {
      case 'fade':
        return <Fade {...props} />;
        break;
      case 'slide':
        return <Slide direction="up" {...props} />;
        break;
      case 'collapse':
        return <Collapse {...props} />;
        break;
      case 'grow':
        return <Grow {...props} />;
        break;
      case 'zoom':
        return <Zoom {...props} />;
        break;
      default:
        return <Fade {...props} />;
    }
  };

  renderActions() {
    const { actions, onClose, classes } = this.props;

    if (actions === Modal.defaultProps.actions) {
      //没传actions
      return actions.map(Button =>
        React.cloneElement(Button, {
          onClick: onClose,
          classes: { root: classes.actionRootBtn },
        }),
      );
    } else if (actions.indexOf('-') == -1) {
      return actions;
    } else {
      return this.renderJustifyActions();
    }
  }

  renderJustifyActions() {
    const { actions, classes } = this.props;
    let index = actions.indexOf('-');
    let left = actions.slice(0, index);
    let right = actions.slice(index + 1);
    return (
      <div className={classes.justifyActions}>
        <div className={classes.left}>{left}</div>
        <div className={classes.right}>{right}</div>
      </div>
    );
  }

  render() {
    const { classes, label, onClose, maxHeight, actions, ...other } = this.props;

    return (
      <Dialog
        TransitionComponent={this.transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.paper }}
        {...this.props}
      >
        <DialogTitle className={classes.title} disableTypography={true}>
          {label}
          <Clear className={classes.icon} onClick={onClose} />
        </DialogTitle>

        <DialogContent
          style={{ maxHeight: `${maxHeight}px` }}
          classes={{ root: classes.contentRoot }}
        >
          {this.props.children}
        </DialogContent>

        <DialogActions classes={{ root: classes.actionRoot }}>{this.renderActions()}</DialogActions>
      </Dialog>
    );
  }
}

Modal.propTypes = {
  /**
   * Decide Modal open or close,	If true, the Modal is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * This is  Modal title
   */
  label: PropTypes.string,
  /**
   * This is usually an animation of open or close the Modal,include slide、collapse、fade、grow、zoom
   */
  animation: PropTypes.oneOf(['slide', 'collapse', 'fade', 'grow', 'zoom']),
  /**
   * onClose callback function
   */
  onClose: PropTypes.func.isRequired,
  /**
   * max content height
   */
  maxHeight: PropTypes.number,
  /**
   * actions button array
   */
  actions: PropTypes.array,
};

Modal.defaultProps = {
  maxHeight: 500,
  open: false,
  label: '',
  animation: 'fade',
  onClose: () => {},
  actions: [
    <Button variant="raised" color="primary" autoFocus>
      Agree
    </Button>,
  ],
};

export default withStyles(styles, { name: 'RMModal' })(Modal);
