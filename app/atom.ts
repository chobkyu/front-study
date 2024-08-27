import {atom} from 'recoil';

export const todoListState = atom({
    key: "todoListState",
    default: []
})
/**
 * echo "# front-study" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chobkyu/front-study.git
git push -u origin main
 */