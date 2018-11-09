<template>
    <div class="app">


       <div class="form-container">
        <h1>Upload Tab to the DB</h1>
        <hr>
        <div class="input-body">
             <label for="">Tab Name:</label>
            <input type="text" placeholder="Tab Name" v-model="newTab.name">
        </div>

        <div class="input-body">
             <label for="">Tab Genre:</label>
            <input type="text" placeholder="tab genre" v-model="newTab.genre">
        </div>

        <div class="input-body">
             <label for="">Tab composer:</label>
            <input type="text" placeholder="Composer name" v-model="newTab.composer">
        </div>

        <div class="input-body">
             <label for="">Tab image URL:</label>
            <input type="text" placeholder="Image URL" v-model="newTab.url">
            </div>

           <div class="submit-button">
                <input type="submit" v-on:click="addTab(newTab)">
           </div>

       </div>

    <div class="data-container">
        <!--where the data will be rendered -->
        <div class="header-component">
            <!-- <div id="logo"><img src="https://png.icons8.com/color/96/ffffff/guitar.png"></div> -->
            <div class="search-feild">
                <input type="text" placeholder="Search for an item" v-model="term">
                <img src="https://img.icons8.com/ios/96/ffffff/search-filled.png">
            </div>
        </div>

    <div v-if="tabs">
    <h5>there are total of {{totalItems}} tabs.</h5>
        <div class="cards-section" v-for="tab in searchResults" :key="tab.id">
            <div class="tab-img">
                <a href="" data-fancybox="gallery" v-bind:href="tab.image"><img v-bind:src="tab.image" alt=""></a>
            </div>
            <div class="tab-info">
                <p>Name: {{tab.name}}</p>
                <p>Compser: {{tab.composer}}</p>
                <p>Genre: {{tab.genre}}</p>
                <p>Img URL: <a v-bind:href="tab.image"><img src="https://png.icons8.com/android/96/ffffff/musical.png"></a></p>
                <button>Update</button>
                <button v-on:click="removeTab(tab)">Delete</button>
            </div>
        </div>
    </div>
    <div v-else class="warnning-msg">no data</div>
  </div>
</div>

</template>




<style lang="scss" scoped>
$cms-background: #252525;
$input-color: #3c3f39ab;

.app {
    background: #FF8008;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFC837, #FF8008);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFC837, #FF8008); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
h5 {
    color: #fff;
}
.form-container {
    display: flex;
    flex-direction: column;
    padding:30px;
    width:500px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, 0, endColorstr=#66000000, 0);    color: #fff;
    font-weight: 800;
    border-radius: 5px;
    h1 {
        text-align: center;
        font-size:20px;
        font-weight: 800;
    }
    .input-body {
        padding:20px;
        input[type="text"] {
            margin-top: 6px;
            background-color: $input-color;
            border: none;
            padding: 15px;
            border-radius: 3px;
            display: block;
            width: 94%;
            color: #fff;
            transition: all 0.4s;
            &:focus {
                outline: none;
                background: #b3b3b3ab;
            }
        }
    }
    .submit-button {
    margin: auto;
    input[type="submit"] {
        border: none;
        padding: 12px;
        border-radius: 5px;
        color: #111;
        width: 200px;
        transition: .5s;
        border-radius: 3px;
        background: $input-color;
        color: #fff;
        &:hover {
            cursor: pointer;
            background: #3c3f39ab;;
            color: #fff;
        &:focus {
            outline: none
        }
        }
    }
  }
}

.data-container {
    margin:10px;
    width: 500px;
    padding: 10px;
    height: 630px;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.4);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, 0, endColorstr=#66000000, 0);
    border-radius: 5px;
    .header-component {
        .search-feild {
            input[type="text"] {
                background-color: $input-color;
                border: none;
                padding: 15px;
                border-radius: 3px;
                width: 410px;
                color: #fff;
                transition: .5s;
                &:focus {
                    outline: none;
                    background: #b3b3b3ab;
                }
            }
            img {
                margin-left: 10px;
                height: 30px;
            }
        }
    }
    .cards-section {
        border-radius: 3px;
        background: #18181850;
        margin-top: 20px;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        .tab-img {
            height: auto;
            transition: transform .5s cubic-bezier(0,0,0,1.19),box-shadow .5s cubic-bezier(0,0,0,1.19);
            &:hover {
                transform: scale(1.05);
                cursor: pointer;
            }
            img {
                height:200px;
                width: 160px;
            }
        }
        .tab-info {
            margin-left: 60px;
            color: #fff;
            p {
                font-weight: bold;
            }
            a {
                text-decoration: none;
                color: #fff;
            }
            img {
                height: 20px;
            }
            button {
                border: none;
                background: $input-color;
                color: #fff;
                margin: 2px;
                padding: 10px;
                border-radius: 3px;
                &:hover {
                    cursor: pointer;
                }
                &:focus {
                    outline: none;
                }
            }
        }
    }
}

.warnning-msg {
    background-color: #d32222;
    color: #fff;
    padding: 10px;
    margin: 30px;
    text-align: center;
    border-radius: 5px;
    font-size: 1.3rem;
}

//styleing the scroll bar
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #464646;
    border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #464646;
    border-radius: 3px;
}
</style>


<script>
import { mapGetters } from "vuex";

export default {
    name:'TabsFetch',
    data () {
        return {
            term: "",
            newTab: {
                name: "",
                genre: "",
                composer: "",
                url: ""
            }
        }
    },
    methods: {
        addTab: function(newTab) {
            console.log(JSON.stringify(this.newTab) + ' ' + 'from the component')
            this.$store.dispatch('submitTab', newTab)
        },
        removeTab: function(tab) {
            // console.log('hello' + JSON.stringify(tab))
            this.$store.dispatch('removeTab', tab._id)
        }
    },
    mounted() {
        let context = this;
        context.$store.dispatch('loadTabs')
    },
    computed: {
        ...mapGetters({
            tabs: "tabs"
        }),

        totalItems: function() {
            return this.tabs.length;
        },

        searchResults: function () {
                var term = this.term.toLowerCase();
                return this.tabs.filter(function (entry) {
                return entry.name.toLowerCase().includes(term);
                });
            }
        }
}
</script>
