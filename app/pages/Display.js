import React from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';


export default class Display extends React.Component {

  constructor() {
    super()

    

    this.state = {
            title:[],
            content:[],
            comments: [],
            image: [],
            city:[],
            price:[],
            posts: []
            // date: []
        }

  }



  componentDidMount(historyDb) {
     axios.get('/dataGet/dataGets').then((res) => {
 
        console.log(res.data.posts)
        this.setState({posts: res.data.posts})
        
    });
    }

  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        //marginBottom: "150px",
        paddingBottom: "150px"
      },
      gridList: {
        width: 750,
        height: 1050,
        overflowY: 'auto',
      },
    };

    const subheaderStyle = {
      fontSize: '30px',
      textAlign: 'center',
      paddingTop: '80px'
      //fontFamily: "Montserrat','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif"
    }

    return (
      
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight={280}
            style={styles.gridList}
            cols={2}
           //padding={50}
          >
            <Subheader style={subheaderStyle}> Featured Meals </Subheader>
            {this.state.posts.map((post) => (
              <GridTile
                key={post.title}
                title={post.title}
                subtitle={<span> <b>{post.city}</b> $ {post.price}</span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={post.image} />
              </GridTile>
            ))}
          </GridList>
        </div>

      </div>



    )





  }

}



