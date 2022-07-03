import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

export default function MissionWrite() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    onError,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  const onSubmit = (data) => {
    const missionItems = JSON.parse(localStorage.getItem('newData'));

    if (missionItems) {
      alert('등록된 목표가 있습니다.');
    } else {
      localStorage.setItem('newData', JSON.stringify(data));
    }
    navigate('/');
  };

  return (
    <div>
      <h2>목표 등록 하기</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label>목표</label>
          <input type="text" {...register('title')} />
        </div>
        <div>
          <label>포부한마디</label>
          <textarea type="text" {...register('saying')} />
        </div>
        <div>
          <label>인증할 횟수</label>
          <input type="num" {...register('count')} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
