import React, { Component } from 'react'
import MyButton from "../util/MyButton";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import {connect} from "react-redux";
import { likeScream, unlikeScream } from "../redux/actions/dataActions";


export class LikeButton extends Component {
    render() {
        const likeButton :(
            <MyButton tip="Like">
              <Link to="login">
                <FavoriteBorder color="primary" />
              </Link>
            </MyButton>
          ) : this.likedScream() ? (
            <MyButton tip="Undo like" onClick={this.unlikeScream}>
              <FavoriteIcon color="primary" />
            </MyButton>
          ) : (
            <MyButton tip="Like" onClick={this.likeScream}>
              <FavoriteBorder color="primary" />
            </MyButton>
          );
        return likeButton
    }
}

LikeButton.PropTypes={
    user: PropTypes.object.isRequired,
    screamId: PropTypes.string.isRequired,
    likeScream: PropTypes.func.isRequired,
    unlikeScream: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapActionsToProps

export default LikeButton
