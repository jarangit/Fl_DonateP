import './App.css';
import SearchInput from './component/input/searchInput';
import Layout from './component/layout/layout';
import HomeBanner from './component/banner/homeBanner';
import Tap from './component/tap/tap';
function App() {
  return (
    <Layout>
      <main className="px-3">
        <div className="flex justify-between items-center py-3">
          <div className="font-semibold">Name</div>
          <div>
            <img src="/img/avatar.png" alt="" width="48px" />
          </div>
        </div>

        <SearchInput />
        <HomeBanner />
        <Tap />
      </main>

    </Layout>
  );
}

export default App;
