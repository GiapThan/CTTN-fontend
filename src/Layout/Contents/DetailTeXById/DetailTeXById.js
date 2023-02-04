import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { MathComponent } from 'mathjax-react';

import style from './DetailTeXById.module.scss';
import { Document } from '../../../Access/db';

const cx = className.bind(style);
const vecto = (a) => (
  <MathComponent tex={String.raw`\overrightarrow{${a}}`} display={false} />
);
const can = (b = '', a) => (
  <MathComponent tex={String.raw`${b}\sqrt{${a}}`} display={false} />
);
const DetailTeXById = () => {
  const params = useParams();

  const [doc, setDoc] = useState({});

  useEffect(() => {
    const docs = Document.find((e) => e.id === params.id);
    setDoc(docs);
  }, [params.id]);

  const handleDownloadFile = () => {
    const aTag = document.createElement('a');
    aTag.href = doc.linkDownload;
    aTag.setAttribute('download', doc.name);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{doc.name}</h2>
      <p>
        <strong>1. Định nghĩa vectơ</strong>
      </p>
      <p>
        Vectơ là một <strong>đoạn thẳng c&oacute; hướng</strong>, nghĩa
        l&agrave; đ&atilde; chỉ ra điểm đầu v&agrave; điểm cuối.
      </p>
      <p>
        <strong>T&iacute;nh chất:</strong>&nbsp;
      </p>
      <ul>
        <li>
          Vectơ c&oacute; điểm đầu l&agrave; A, điểm cuối l&agrave; B được
          k&yacute; hiệu l&agrave;{' '}
          <MathComponent tex={String.raw`\vec{AB}`} display={false} />, đọc
          l&agrave; vectơ{' '}
          <MathComponent tex={String.raw`\vec{AB}`} display={false} />.
        </li>
        <li>
          Đường thẳng đi qua hai điểm A v&agrave; B được gọi l&agrave;
          gi&aacute; của vectơ{' '}
          <MathComponent tex={String.raw`\vec{AB}`} display={false} />.
        </li>
        <li>
          Độ d&agrave;i của đoạn thẳng AB được gọi l&agrave; độ d&agrave;i, hay
          module của vectơ{' '}
          <MathComponent tex={String.raw`\vec{AB}`} display={false} /> v&agrave;
          được k&yacute; hiệu l&agrave;{' '}
          <MathComponent tex={String.raw`|\vec{AB}|`} display={false} />
        </li>
      </ul>

      <p>
        <strong>2. Hai vectơ c&ugrave;ng phương</strong>
      </p>
      <p>
        Hai vectơ được gọi l&agrave; <strong>c&ugrave;ng phương</strong> nếu
        gi&aacute; của ch&uacute;ng song song hoặc tr&ugrave;ng nhau.
      </p>
      <p>
        <strong>Nhận x&eacute;t:</strong>
      </p>
      <ul>
        <li>
          Hai vectơ c&ugrave;ng phương th&igrave; c&oacute; thể c&ugrave;ng
          hướng hoặc ngược hướng.
        </li>
        <li>
          Ba điểm A, B, C thẳng h&agrave;ng khi v&agrave; chỉ khi hai vectơ{' '}
          <MathComponent tex={String.raw`\vec{AB}`} display={false} />,{' '}
          <MathComponent tex={String.raw`\vec{AC}`} display={false} />{' '}
          c&ugrave;ng phương.
        </li>
      </ul>
      <p>
        <strong>3. Hai vectơ bằng nhau</strong>
      </p>
      <p>
        Hai vectơ <MathComponent tex={String.raw`\vec{a}`} display={false} />{' '}
        v&agrave; <MathComponent tex={String.raw`\vec{b}`} display={false} />{' '}
        được gọi l&agrave; <strong>bằng nhau</strong> nếu ch&uacute;ng c&oacute;
        c&ugrave;ng hướng v&agrave; c&ugrave;ng độ d&agrave;i.
      </p>
      <p>
        K&yacute; hiệu:{' '}
        <MathComponent tex={String.raw`\vec{a}`} display={false} /> ={' '}
        <MathComponent tex={String.raw`\vec{b}`} display={false} /> .
      </p>
      <p>
        Hai vectơ <MathComponent tex={String.raw`\vec{a}`} display={false} />{' '}
        v&agrave; {vecto('b')} được gọi l&agrave; <strong>đối nhau</strong> nếu
        ch&uacute;ng ngược hướng v&agrave; c&oacute; c&ugrave;ng độ d&agrave;i.
      </p>
      <p>
        K&yacute; hiệu: {vecto('a')} = &minus; {vecto('b')} .
      </p>
      <p>
        <strong>4. Vectơ-kh&ocirc;ng</strong>
      </p>
      <p>
        Vectơ-kh&ocirc;ng l&agrave; vectơ c&oacute; điểm đầu v&agrave; điểm cuối
        tr&ugrave;ng nhau, k&yacute; hiệu {vecto('0')} .
      </p>
      <p>
        <strong>5 C&aacute;c B&agrave;i to&aacute;n</strong>
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>V&iacute; dụ 1.</span> Cho tam
        gi&aacute;c ABC. Gọi P, Q, R lần lượt l&agrave; trung điểm c&aacute;c
        cạnh AB, BC, AC.
      </p>
      <p>
        a) N&ecirc;u c&aacute;c vectơ c&oacute; điểm đầu v&agrave; điểm cuối
        l&agrave; A, B, C.
      </p>
      <p>b) N&ecirc;u c&aacute;c vectơ bằng {vecto('PQ')}.</p>
      <p>c) N&ecirc;u c&aacute;c vectơ đối của {vecto('PQ')}.&nbsp;</p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong> Lời giải</strong>
        </span>
        .
      </p>
      <p>
        a) C&aacute;c vectơ c&oacute; điểm đầu v&agrave; điểm cuối l&agrave;
        c&aacute;c điểm A, B, C l&agrave;: {vecto('AB')}, {vecto('BA')},{' '}
        {vecto('BC')}, {vecto('CB')}, {vecto('AC')}, {vecto('CA')}.
      </p>
      <p>
        b) C&aacute;c vectơ bằng {vecto('PQ')} l&agrave; {vecto('AR')} v&agrave;{' '}
        {vecto('RC')}.
      </p>
      <p>
        c) C&aacute;c vectơ đối của vectơ {vecto('PQ')} l&agrave;: {vecto('QP')}
        , {vecto('RA')} v&agrave; {vecto('CR')}.
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>V&iacute; dụ 2.</span> Cho tam
        gi&aacute;c ABC. Gọi M, N lần lượt l&agrave; trung điểm c&aacute;c cạnh
        BC, AB.
      </p>
      <p>
        a) C&aacute;c vectơ kh&aacute;c {vecto('0')} n&agrave;o c&ugrave;ng
        hướng với {vecto('AC')}?
      </p>
      <p>
        b) C&aacute;c vectơ kh&aacute;c {vecto('0')} n&agrave;o ngược hướng với{' '}
        {vecto('BC')}?
      </p>
      <p>c) N&ecirc;u c&aacute;c cặp vectơ bằng nhau.</p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>Lời giải.</strong>
        </span>
      </p>
      <p>
        a) Vectơ kh&aacute;c {vecto('0')} v&agrave; c&ugrave;ng hướng với{' '}
        {vecto('AC')} l&agrave; {vecto('NM')}.
      </p>
      <p>
        b) C&aacute;c vectơ kh&aacute;c {vecto('0')} v&agrave; ngược hướng với{' '}
        {vecto('BC')} l&agrave; {vecto('CB')}, {vecto('CM')} v&agrave;{' '}
        {vecto('MB')}.
      </p>
      <p>
        c) C&aacute;c cặp vectơ bằng nhau: {vecto('AN')} v&agrave; {vecto('NB')}
        ; {vecto('BM')} v&agrave; {vecto('MC')}.
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 1.</strong>{' '}
        </span>
        Cho h&igrave;nh b&igrave;nh h&agrave;nh ABCD. H&atilde;y chỉ ra
        c&aacute;c vectơ kh&aacute;c {vecto('0')} c&oacute; điểm đầu v&agrave;
        điểm cuối l&agrave; một trong bốn điểm A, B, C, D. Trong số c&aacute;c
        vectơ tr&ecirc;n, h&atilde;y chỉ ra
      </p>
      <p>a) c&aacute;c vectơ c&ugrave;ng phương,</p>
      <p>b) c&aacute;c cặp vectơ c&ugrave;ng phương nhưng ngược hướng,</p>
      <p>c) c&aacute;c cặp vectơ bằng nhau.</p>
      <p>
        <strong>Lời giải.</strong>
      </p>
      <p>
        C&aacute;c vectơ kh&aacute;c {vecto('0')} c&oacute; điểm đầu v&agrave;
        điểm cuối l&agrave; một trong bốn điểm A, B, C, D l&agrave;:{' '}
        {vecto('AB')}, {vecto('BA')}, {vecto('AC')}, {vecto('CA')},{' '}
        {vecto('AD')}, {vecto('DA')}, {vecto('BC')}, {vecto('CB')},{' '}
        {vecto('BD')}, {vecto('DB')}, {vecto('CD')}, {vecto('DC')}.
      </p>
      <p>
        a) Trong c&aacute;c vectơ tr&ecirc;n, c&aacute;c bộ vectơ c&ugrave;ng
        phương với nhau từng đ&ocirc;i một l&agrave;: {vecto('AB')},{' '}
        {vecto('BA')}, {vecto('CD')} v&agrave; {vecto('DC')}; {vecto('AD')},{' '}
        {vecto('DA')}, {vecto('BC')} v&agrave; {vecto('CB')}.
      </p>
      <p>
        b) C&aacute;c cặp vectơ c&ugrave;ng phương nhưng ngược hướng l&agrave;:{' '}
        {vecto('AB')} v&agrave; {vecto('BA')}; {vecto('CD')} v&agrave;{' '}
        {vecto('DC')}; {vecto('AB')} v&agrave; {vecto('CD')}; {vecto('BA')}{' '}
        v&agrave; {vecto('DC')}; {vecto('AD')} v&agrave; {vecto('DA')};{' '}
        {vecto('BC')} v&agrave; {vecto('CB')}; {vecto('AD')} v&agrave;{' '}
        {vecto('CB')}; {vecto('DA')} v&agrave; {vecto('BC')}.
      </p>
      <p>
        c) C&aacute;c cặp vectơ bằng nhau l&agrave;: {vecto('AB')} v&agrave;{' '}
        {vecto('DC')}; {vecto('BA')} v&agrave; {vecto('CD')}; {vecto('AD')}{' '}
        v&agrave; {vecto('BC')}; {vecto('DA')} v&agrave; {vecto('CB')}.
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 2.</strong>
        </span>{' '}
        Cho lục gi&aacute;c đều ABCDEF c&oacute; t&acirc;m O.
      </p>
      <p>
        a) T&igrave;m c&aacute;c vectơ kh&aacute;c #&raquo;0 c&ugrave;ng phương
        với vectơ {vecto('AO')}.
      </p>
      <p>
        b) T&igrave;m c&aacute;c vectơ bằng với vectơ {vecto('AB')} v&agrave;{' '}
        {vecto('CD')}.
      </p>
      <p>
        c) H&atilde;y vẽ c&aacute;c vectơ bằng với vectơ {vecto('AB')} v&agrave;
        c&oacute; điểm đầu lần lượt l&agrave; c&aacute;c điểm O, C, D.&nbsp;
      </p>
      <p>
        <strong> Lời giải</strong>.
      </p>
      <p>
        a) C&aacute;c vectơ kh&aacute;c {vecto('0')} c&ugrave;ng phương với{' '}
        {vecto('AO')} l&agrave;: {vecto('OA')}, {vecto('OD')}, {vecto('DO')},{' '}
        {vecto('AD')}, {vecto('DA')}, {vecto('BC')}, {vecto('CB')},{' '}
        {vecto('FE')} v&agrave; {vecto('EF')}.
      </p>
      <p>
        b) C&aacute;c vectơ bằng vectơ {vecto('AB')} l&agrave;: {vecto('AF')},{' '}
        {vecto('OC')} v&agrave; {vecto('ED')}. C&aacute;c vectơ bằng vectơ{' '}
        {vecto('CD')} l&agrave;: {vecto('BO')}, {vecto('OE')} v&agrave;{' '}
        {vecto('AF')}.
      </p>
      <p>c) Vẽ.</p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 3.&nbsp;</strong>
        </span>
        Cho tam gi&aacute;c ABC vu&ocirc;ng c&acirc;n tại A v&agrave; AB = a.
        Gọi M, N lần lượt l&agrave; trung điểm AB, AC.
      </p>
      <p>
        a) T&igrave;m c&aacute;c vectơ kh&aacute;c {vecto('0')} v&agrave;
        c&ugrave;ng phương với {vecto('MN')}.
      </p>
      <p>b) T&iacute;nh độ d&agrave;i vectơ {vecto('MN')}.</p>
      <p>
        <strong> Lời giải.</strong>
      </p>
      <p>
        a) C&aacute;c vectơ kh&aacute;c {vecto('0')} v&agrave; c&ugrave;ng
        phương với {vecto('MN')} l&agrave;: {vecto('NM')}, {vecto('BC')}{' '}
        v&agrave; {vecto('CB')}.
      </p>
      <p>
        b) Trước hết, do tam gi&aacute;c ABC vu&ocirc;ng c&acirc;n tại A
        n&ecirc;n ta c&oacute; BC = {can('2AB^2')} = a {can('2')}. V&igrave; M,
        N lần lượt l&agrave; trung điểm AB, AC n&ecirc;n MN l&agrave; đường
        trung b&igrave;nh của tam gi&aacute;c ABC.
      </p>
      <p>
        Suy ra MN ={' '}
        <MathComponent
          display={false}
          tex={String.raw`\displaystyle\frac{1}{2} \cdot BC`}
        />{' '}
        ={' '}
        <MathComponent
          display={false}
          tex={String.raw`\displaystyle\frac{a\sqrt{2}}{2}`}
        />
        .
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 4.</strong>
        </span>{' '}
        Cho h&igrave;nh thoi ABCD cạnh a v&agrave;{' '}
        <MathComponent display={false} tex={String.raw`\widehat{A} = 60^o`} />.
      </p>
      <p>
        a) Chứng minh {vecto('|AB|')} = {vecto('|BC|')}.
      </p>
      <p>b) T&iacute;nh độ d&agrave;i của vectơ {vecto('AC')}.</p>
      <p>
        <strong>Lời giải. </strong>
      </p>
      <p>
        a) V&igrave; ABCD l&agrave; h&igrave;nh thoi n&ecirc;n ta c&oacute; AB =
        BC = CD = DA. Từ đ&oacute;, ta c&oacute; {vecto('|AB|')} ={' '}
        {vecto('|BC|')}.
      </p>
      <p>
        b) Độ d&agrave;i đoạn thẳng AC được t&iacute;nh theo c&ocirc;ng thức{' '}
        <MathComponent
          display={false}
          tex={String.raw`AC^2 = AB^2 + AD^2 + 2AB \cdot AD\cdot \cos \widehat{BAD}`}
        />
        .
      </p>
      <p>
        &Aacute;p dụng c&ocirc;ng thức tr&ecirc;n, ta suy ra{' '}
        <MathComponent
          display={true}
          tex={String.raw`AC = \sqrt{ AB^2 + AD^2 + 2AB\cdot AD \cdot \cos \widehat{BAD}} = \sqrt{a^2 + a^2+2a^2\cdot60^o} = a\sqrt{3}`}
        />
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong> B&agrave;i to&aacute;n 5.</strong>
        </span>{' '}
        Cho tam gi&aacute;c ABC c&oacute; A&prime; , B&prime; , C &prime; lần
        lượt l&agrave; trung điểm của c&aacute;c cạnh BC, CA, AB
      </p>
      <p>
        a) Chứng minh rằng {vecto("BC'")} = {vecto("C'A")} = {vecto("A'B'")}.
      </p>
      <p>
        b) T&igrave;m c&aacute;c vectơ bằng với {vecto("B'C'")}, {vecto("C'A'")}
        .
      </p>
      <p>
        <strong>Lời giải. </strong>
      </p>
      <p>
        a) V&igrave; C &prime; l&agrave; trung điểm AB n&ecirc;n ta c&oacute;
        BC&prime; = C &prime;A.
      </p>
      <p>
        Mặt kh&aacute;c, ta dễ thấy {vecto("BC'")} v&agrave; {vecto("C'A")}{' '}
        l&agrave; hai vectơ c&ugrave;ng hướng. Do đ&oacute; {vecto("BC'")} ={' '}
        {vecto("C'A")}.
      </p>
      <p>
        Ta c&oacute; A&prime;B&prime; l&agrave; đường trung b&igrave;nh của tam
        gi&aacute;c ABC.
      </p>
      <p>
        Do đ&oacute; ta c&oacute;{' '}
        <MathComponent
          display={false}
          tex={String.raw`A'B' = \frac{AB}{2} = BC' = C'A`}
        />{' '}
        v&agrave;{' '}
        <MathComponent display={false} tex={String.raw`A'B' \parallel BC'`} /> .
      </p>
      <p>
        Từ đ&oacute;, ta c&oacute; {vecto("A'B'")} = {vecto("BC'")} (hai vectơ
        tr&ecirc;n c&ugrave;ng hướng v&agrave; c&oacute; độ d&agrave;i bằng
        nhau).
      </p>
      <p>
        Vậy, ta kết luận được: {vecto("BC'")} = {vecto("C'A")} = {vecto("A'B'")}{' '}
        .
      </p>
      <p>
        b) C&aacute;c vectơ bằng với {vecto("B'C'")} l&agrave; {vecto("CA'")}{' '}
        v&agrave; {vecto("A'B")}.
      </p>
      <p>
        C&aacute;c vectơ bằng với {vecto("C'A'")} l&agrave; {vecto("AB'")}{' '}
        v&agrave; {vecto("B'C")}.
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 6.</strong>
        </span>{' '}
        Cho tam gi&aacute;c ABC c&oacute; M, N lần lượt l&agrave; trung điểm
        cạnh AB, AC.
      </p>
      <p>
        a) Chứng minh rằng hai vectơ {vecto('BN')} v&agrave; {vecto('CM')}{' '}
        kh&ocirc;ng c&ugrave;ng phương.
      </p>
      <p>
        b) Chứng minh rằng {vecto('MN')}, {vecto('BC')} c&ugrave;ng phương.
        <p>
          <strong>Lời giải.</strong>
        </p>
      </p>
      <p>
        a) Giả sử {vecto('BN')} v&agrave; {vecto('CM')} c&ugrave;ng phương. Khi
        ấy hai đường thẳng BN v&agrave; CM song song với nhau. Nhưng điều
        tr&ecirc;n l&agrave; v&ocirc; l&yacute; v&igrave; BN v&agrave; CM
        l&agrave; hai đường trung tuyến của tam gi&aacute;c ABC, ch&uacute;ng
        cắt nhau tại một điểm được gọi l&agrave; trọng t&acirc;m của tam
        gi&aacute;c ABC. Do đ&oacute; BN v&agrave; CM kh&ocirc;ng thể song song
        với nhau.
      </p>
      <p>
        Như vậy, ta suy ra hai vectơ {vecto('BN')} v&agrave; {vecto('CM')}{' '}
        kh&ocirc;ng c&ugrave;ng phương với nhau.
      </p>
      <p>
        b) Ta c&oacute; MN l&agrave; đường trung b&igrave;nh của tam gi&aacute;c
        ABC.
      </p>
      <p>Suy ra MN song song với BC.</p>
      <p>
        Vậy {vecto('MN')} c&ugrave;ng phương với {vecto('BC')} (v&igrave; hai
        vectơ tr&ecirc;n c&oacute; gi&aacute; song song với nhau).
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong> B&agrave;i to&aacute;n 7.</strong>
        </span>{' '}
        Cho hai điểm A, B ph&acirc;n biệt. T&igrave;m điểm M thỏa m&atilde;n #
        &raquo; MA = # &raquo; MB.
      </p>
      <p>
        <strong> Lời giải.</strong>
      </p>
      <p>
        X&eacute;t điểm M thỏa m&atilde;n {vecto('MA')} = {vecto('MB')}. Khi ấy
        ta c&oacute; {vecto('MA')} c&ugrave;ng phương nhưng ngược hướng với{' '}
        {vecto('MB')}, hay n&oacute;i c&aacute;ch kh&aacute;c, ta c&oacute; ba
        điểm A, M, B thẳng h&agrave;ng theo thứ tự ấy.
      </p>
      <p>
        Mặt kh&aacute;c, ta lại c&oacute; MA = MB. Vậy điểm M thỏa m&atilde;n
        y&ecirc;u cầu b&agrave;i to&aacute;n l&agrave; trung điểm của đoạn thẳng
        AB.
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 8.</strong>
        </span>{' '}
        Tứ gi&aacute;c ABCD l&agrave; h&igrave;nh g&igrave; nếu thỏa m&atilde;n
        {vecto('AB')} = {vecto('DC')} ? Giả sử th&ecirc;m {vecto('|AB|')} ={' '}
        {vecto('|BC|')}, khi ấy tứ gi&aacute;c ABCD l&agrave; h&igrave;nh
        g&igrave;?
      </p>
      <p>
        <strong>Lời giải.</strong>
      </p>
      <p>
        Nếu {vecto('AB')} = {vecto('DC')} th&igrave; ta sẽ c&oacute;{' '}
        <MathComponent display={false} tex={String.raw`AB \parallel CD`} />{' '}
        v&agrave; AB = DC. Từ đ&oacute; ta suy ra ABCD sẽ l&agrave; h&igrave;nh
        b&igrave;nh h&agrave;nh.
      </p>
      <p>
        Nếu ta c&oacute; th&ecirc;m {vecto('|AB|')} = {vecto('|BC|')}, nghĩa
        l&agrave; AB = BC, th&igrave; h&igrave;nh b&igrave;nh h&agrave;nh ABCD
        sẽ c&oacute; 4 cạnh b&ecirc;n bằng nhau. Vậy khi ấy tứ gi&aacute;c ABCD
        l&agrave; h&igrave;nh thoi.
      </p>
      <p>
        <span style={{ color: '#33cccc' }}>
          <strong>B&agrave;i to&aacute;n 9.</strong>
        </span>{' '}
        Cho h&igrave;nh lục gi&aacute;c đều ABCDEF c&oacute; AB = a. T&iacute;nh
        độ d&agrave;i c&aacute;c vectơ {vecto('AC')}, {vecto('AF')}.
      </p>
      <p>
        <strong>Lời giải.</strong>&nbsp; Trước hết, ta thấy rằng AB = AF = a
        n&ecirc;n độ d&agrave;i của {vecto('AF')} bằng a.
      </p>
      <p>
        Trong một lục gi&aacute;c đều, mỗi g&oacute;c c&oacute; số đo bằng{' '}
        <MathComponent display={false} tex={String.raw`120^O`} /> . Từ
        đ&oacute;, x&eacute;t tam gi&aacute;c ABC, &aacute;p dụng định l&yacute;
        cosin, ta c&oacute;
      </p>
      <p>
        <MathComponent
          display={true}
          tex={String.raw`AC^2 = AB^2 + BC^2-2AB \cdot BC \cdot \cos \widehat{ABC} `}
        />
        <MathComponent
          display={true}
          tex={String.raw`\Rightarrow AC = \sqrt{ AB^2 + BC^2 - 2AB\cdot BC\cdot \cos \widehat{ABC}} = \sqrt{a^2 + a^2 - 2a^2\cdot 120^o} = a\sqrt{3}`}
        />
      </p>

      <p>
        Vậy, độ d&agrave;i của vectơ {vecto('AC')} l&agrave; {can('a', '3')}.
      </p>
      <button onClick={handleDownloadFile} className={cx('download')}>
        <FontAwesomeIcon icon={faDownload} /> Tải tài liệu
      </button>
    </div>
  );
};

export default DetailTeXById;
