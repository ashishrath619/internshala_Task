import React, { useState, forwardRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import CloseIcon from "@material-ui/icons/Close";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    paddingLeft: "1rem",
    marginTop: "2rem",
    marginLeft: "2rem",
    border: "1px solid #1f427d",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  btn: {
    borderRadius: "100% 100%",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [getOpen, setOpen] = useState("");
  const [expandedtwo, setExpandedtwo] = React.useState(false);
  const [getOpentwo, setOpentwo] = useState("");
  const [gettask, settask] = useState("");
  const [gettaskvalue, settaskvalue] = useState("");
  const [gettaskid, settaskvid] = useState("");
  const [getdetails, setdetails] = useState("");
  const [getData, setData] = useState([]);
  const [getOpentest, setOpentest] = useState(false);
  const [getOpenshow, setopenshow] = useState(false);

  const [getrefresh, setrefresh] = useState("");
  var dispatch = useDispatch();

  //
  const items = useSelector((store) => store.cartitems);
  var itemcart = Object.values(items);
  var itemkeys = Object.keys(items);
  console.log("itemcart", itemcart);

  const handleExpandClicktwo = () => {
    setExpandedtwo(!expandedtwo);
  };

  const handleClickOpentwo = (dataa) => {
    settaskvalue(dataa.task);
    settaskvid(dataa.id);
    setOpentwo(true);
    console.log("aaa", dataa.id, dataa.task);
  };

  const handleClosetwo = () => {
    setOpentwo(false);
  };
  //--------------
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleaddtaskdetails = () => {
    var body = {
      id: gettaskid,
      task: gettaskvalue,
      details: getdetails,
      date: startDate,
    };
    dispatch({ type: "ADD_CART_details", Data: [body.id, body] });
    setopenshow(true);
    setOpentwo(false);
  };
  const handleaddtask = () => {
    var id = new Date().valueOf();

    var body = { id: id, task: gettask };

    dispatch({ type: "ADD_CART", Data: [body.id, body] });
    settask("");
    setData(items);
    setOpen(false);
  };
  const handledelete = () => {
    dispatch({ type: "Delete_data", Data: [gettaskid] });
    setrefresh(!getrefresh);
  };
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const handleDialogtwo = () => {
    return (
      <div>
        <Dialog
          open={getOpentwo}
          onClose={handleClosetwo}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <div>
              <Button onClick={handledelete} color="primary">
                <DeleteOutlineIcon />
              </Button>
              <Button
                style={{ float: "right" }}
                onClick={handleClosetwo}
                color="primary"
              >
                <CloseIcon />
              </Button>
            </div>
            <div style={{ padding: 8 }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Task Name"
                variant="outlined"
                size="small"
                disabled
                value={gettaskvalue}
                onChange={(e) => {
                  settask(e.target.value);
                }}
              />

              <TextField
                style={{ marginTop: "15px", backgroundColor: "#f0f5fa" }}
                fullWidth
                id="outlined-multiline-static"
                label="Add Details"
                multiline
                rows={4}
                value={getdetails}
                onChange={(e) => {
                  setdetails(e.target.value);
                }}
                variant="outlined"
              />
              <div
                style={{ paddingTop: 10, color: "#1f427d", display: "flex" }}
              >
                <h5 style={{ paddingRight: "15px" }}>Add date</h5>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                />
              </div>

              <div style={{ paddingLeft: 5 }}>
                <button
                  style={{
                    width: 80,
                    height: 40,
                    backgroundColor: "#1C437E",
                    color: "white",
                    border: "none",
                    fontSize: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                    float: "right",
                  }}
                  onClick={() => handleaddtaskdetails()}
                >
                  Save
                </button>
              </div>
            </div>{" "}
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  // dailog2end

  const handleDialog = () => {
    return (
      <div>
        <Dialog
          open={getOpen}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-basic"
                label="New List"
                variant="outlined"
                size="small"
                value={gettask}
                onChange={(e) => {
                  settask(e.target.value);
                }}
              />
              <div style={{ paddingLeft: 5 }}>
                <button
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#1C437E",
                    color: "white",
                    borderRadius: "50%",
                    border: "none",
                    fontSize: "20px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleaddtask()}
                >
                  +
                </button>
              </div>
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="My Tasks"
        />
        <div style={{ display: "flex", paddingLeft: "0.9rem" }}>
          <button
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#1C437E",
              color: "white",
              borderRadius: "50%",
              border: "none",
              fontSize: "20px",
              textAlign: "center",
              justifyContent: "center",
            }}
            onClick={handleClickOpen}
          >
            +
          </button>
          <p style={{ paddingLeft: "0.5rem", paddingTop: "0.5rem" }}>
            Add a Task
          </p>
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <RadioGroup aria-label="gender" name="gender1">
              {getOpenshow ? (
                <div>
                  {itemcart.map((dataa) => (
                    <div>
                      <FormControlLabel
                        value={dataa.task}
                        control={<Radio />}
                        label={dataa.task}
                      />

                      <IconButton
                        style={{ float: "right" }}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        onClick={() => handleClickOpentwo(dataa)}
                      >
                        <EditIcon />
                      </IconButton>
                      <div
                        style={{
                          paddingLeft: "1.8rem",
                          fontSize: "1rem",
                          width: "100%",
                        }}
                      >
                        <p
                          style={{
                            textAlign: "justify",
                            display: "block",
                            fontWeight: "bold",
                          }}
                        >
                          {dataa.details}
                        </p>
                      </div>
                      {/* <p>{dataa.date}</p> */}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {itemcart.map((dataa) => (
                    <div>
                      <FormControlLabel
                        value={dataa.task}
                        control={<Radio />}
                        label={dataa.task}
                      />

                      <IconButton
                        style={{ float: "right" }}
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        onClick={() => handleClickOpentwo(dataa)}
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  ))}
                </div>
              )}
            </RadioGroup>
          </Typography>
        </CardContent>
      </Card>
      {handleDialog()}
      {handleDialogtwo()}
    </div>
  );
}
