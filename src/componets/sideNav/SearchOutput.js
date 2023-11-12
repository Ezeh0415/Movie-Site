import { Link } from "react-router-dom";

// material ui imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SearchOutput = ({results}) => {

    return (
        <div className="search-section" >
            <h2 className="--flex-end ">your search here</h2>

        {results.map((result) => {
            const { id,title,rating,medium_cover_image,genres} = result
            return (
               <div key={id} className="output">
                 <Link to={`/allMovie/${id}`}>
                        <Card sx={{ display: 'flex' , justifyContent:"space-between"}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h6">
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {rating}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {genres}
                                </Typography>
                                </CardContent>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 150, height: 152 }}
                                image={medium_cover_image}
                                alt={title}
                            />
                        </Card>
                 </Link>
               </div>

            )
        })}

        </div>
    )
}

export default SearchOutput;