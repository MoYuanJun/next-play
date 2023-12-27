import css from './index.module.css';

export default function Home() {
  return (
    <main className="container">
      Root Page
      <div style={{ color: 'red' }}>style</div>
      <div className={css.item}>CSS 模块化</div>
      <div className="g-link">全局样式</div>
    </main>
  );
}
